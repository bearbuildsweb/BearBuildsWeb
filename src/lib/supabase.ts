import { createClient } from "@supabase/supabase-js";

// Read Supabase credentials from Vite environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

// Initialize single dedicated Supabase client instance
export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder-key"
);

/**
  Check if Supabase environment variables are present
 */
export const isSupabaseConfigured = (): boolean => {
  return Boolean(
    import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY
  );
};

export interface QuestionnaireSubmissionResult {
  success: boolean;
  data?: any;
  error?: string;
}

/**
 * Submits questionnaire responses to the Supabase database.
 * 1. Looks up the client record where slug = 'bear-builds-web'
 * 2. Retrieves its client UUID
 * 3. Inserts a new row in the submissions table with client_id and unflattened responses JSONB
 */
export async function submitQuestionnaire(
  responses: Record<string, any>
): Promise<QuestionnaireSubmissionResult> {
  try {
    if (!isSupabaseConfigured()) {
      console.warn(
        "[Supabase] VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY is not configured in environment."
      );
    }

    // Step 1: Look up the client whose slug equals "bear-builds-web"
    const { data: client, error: clientError } = await supabase
      .from("clients")
      .select("id")
      .eq("slug", "bear-builds-web")
      .single();

    if (clientError || !client) {
      const errorMessage =
        clientError?.message || "Client with slug 'bear-builds-web' not found in database.";
      console.error("[Supabase] Failed to retrieve client ID:", errorMessage);
      return {
        success: false,
        error: `Client lookup failed: ${errorMessage}`,
      };
    }

    // Step 2: Insert into submissions table
    // Store complete questionnaire object directly in the responses JSONB column
    const { data: submissionData, error: insertError } = await supabase
      .from("submissions")
      .insert([
        {
          client_id: client.id,
          responses: responses,
        },
      ])
      .select();

    if (insertError) {
      console.error("[Supabase] Failed inserting submission:", insertError.message);
      return {
        success: false,
        error: `Submission failed: ${insertError.message}`,
      };
    }

    console.log("[Supabase] Questionnaire submission inserted successfully:", submissionData);
    return {
      success: true,
      data: submissionData,
    };
  } catch (err: any) {
    const catchError = err?.message || "An unexpected error occurred during submission.";
    console.error("[Supabase] Exception during questionnaire submission:", catchError);
    return {
      success: false,
      error: catchError,
    };
  }
}
