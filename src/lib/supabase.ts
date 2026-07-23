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
  Check if valid Supabase environment variables are present
 */
export const isSupabaseConfigured = (): boolean => {
  const url = import.meta.env.VITE_SUPABASE_URL || "";
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

  if (!url || !key) return false;
  if (url.includes("your-project.supabase.co") || url.includes("placeholder.supabase.co")) return false;
  if (key === "your-anon-key" || key === "placeholder-key") return false;

  return true;
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
 * 3. Inserts a new row in the submissions table with client_id and responses JSONB
 */
export async function submitQuestionnaire(
  responses: Record<string, any>
): Promise<QuestionnaireSubmissionResult> {
  try {
    if (!isSupabaseConfigured()) {
      const url = import.meta.env.VITE_SUPABASE_URL || "(not set)";
      const msg = !import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY
        ? "Supabase environment variables (VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY) are missing in the browser runtime."
        : `Supabase environment variables are currently set to placeholder values (${url}). Please set actual Supabase project credentials.`;

      console.error("[Supabase]", msg);
      return {
        success: false,
        error: msg,
      };
    }

    // Step 1: Look up client where slug equals 'bear-builds-web' (case-insensitive)
    const targetSlug = "bear-builds-web".toLowerCase().trim();

    const { data: client, error: clientError } = await supabase
      .from("clients")
      .select("id, slug")
      .ilike("slug", targetSlug)
      .maybeSingle();

    if (clientError) {
      const errorMessage = `Client query failed: ${clientError.message} (Code: ${clientError.code}). Please check Row-Level Security (RLS) policy on 'clients' table in Supabase for anon role.`;
      console.error("[Supabase]", errorMessage);
      return {
        success: false,
        error: errorMessage,
      };
    }

    if (!client || !client.id) {
      const errorMessage = `No client found with slug '${targetSlug}' in 'clients' table. Please add a client row with slug = '${targetSlug}' in Supabase and ensure RLS policy allows SELECT for the anon role.`;
      console.error("[Supabase]", errorMessage);
      return {
        success: false,
        error: errorMessage,
      };
    }

    const clientId = client.id;
    console.log(`[Supabase] Client lookup successful for '${targetSlug}': ${clientId}`);

    // Step 2: Insert into submissions table with client_id and responses JSONB
    const { error: insertError } = await supabase
      .from("submissions")
      .insert([
        {
          client_id: clientId,
          responses: responses,
        },
      ]);

    if (insertError) {
      let insertErrMsg = `Database insert failed: ${insertError.message} (Code: ${insertError.code}).`;

      if (insertError.code === "42501" || insertError.message?.toLowerCase().includes("permission") || insertError.message?.toLowerCase().includes("policy")) {
        insertErrMsg = `Permission denied inserting into 'submissions' table (Code: ${insertError.code}). Please add an INSERT Row-Level Security (RLS) policy for 'anon' role on 'submissions' table in Supabase.`;
      } else if (insertError.code === "23503" || insertError.message?.toLowerCase().includes("foreign key")) {
        insertErrMsg = `Foreign key constraint error on client_id '${clientId}'. Please verify the client exists in 'clients' table.`;
      }

      console.error("[Supabase]", insertErrMsg);
      return {
        success: false,
        error: insertErrMsg,
      };
    }

    console.log("[Supabase] Questionnaire submission inserted successfully into 'submissions' table.");
    return {
      success: true,
      data: { client_id: clientId, responses },
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
