/**
 * Sends questionnaire data directly to the Edge Function.
 * The Edge Function handles all backend operations (database persistence, emails, etc.),
 * keeping the frontend loosely coupled from backend implementation details.
 */

export interface SubmissionResult {
  success: boolean;
  data?: any;
  error?: string;
}

export async function submitQuestionnaire(
  formData: Record<string, any>
): Promise<SubmissionResult> {
  const edgeFunctionUrl = "https://kjwbwfizbbfzfvvlltea.supabase.co/functions/v1/send-email";
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (supabaseAnonKey) {
    headers["Authorization"] = `Bearer ${supabaseAnonKey}`;
    headers["apikey"] = supabaseAnonKey;
  }

  try {
    const response = await fetch(edgeFunctionUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({
        ...formData,
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      console.error("[Edge Function] Response error:", response.status, errorText);
      return {
        success: false,
        error: `Submission service returned error (${response.status})`,
      };
    }

    const resData = await response.json().catch(() => ({ status: "ok" }));
    console.log("[Edge Function] Data successfully received by edge function:", resData);

    return {
      success: true,
      data: resData,
    };
  } catch (err: any) {
    const message = err?.message || "Failed to connect to submission service.";
    console.error("[Edge Function] Network/Fetch exception:", message);
    return {
      success: false,
      error: message,
    };
  }
}
