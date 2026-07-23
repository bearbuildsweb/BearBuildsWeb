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
      const msg =
        "Supabase credentials missing. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your environment variables or GitHub repository Secrets/Variables.";
      console.error("[Supabase]", msg);
      return {
        success: false,
        error: msg,
      };
    }

    // Step 1: Look up the client whose slug equals "bear-builds-web"
    const { data: client, error: clientError } = await supabase
      .from("clients")
      .select("id")
      .eq("slug", "bear-builds-web")
      .maybeSingle();

    if (clientError) {
      const errorMessage = `Client query failed: ${clientError.message} (Code: ${clientError.code}). Please check RLS policy on 'clients' table in Supabase.`;
      console.error("[Supabase] Failed to retrieve client ID:", errorMessage);
      return {
        success: false,
        error: errorMessage,
      };
    }

    if (!client) {
      const errorMessage = "No client found with slug 'bear-builds-web' in 'clients' table.";
      console.error("[Supabase]", errorMessage);
      return {
        success: false,
        error: errorMessage,
      };
    }

    // Step 2: Insert into submissions table
    // Store complete questionnaire object directly in the responses JSONB column.
    // Omit .select() to avoid requiring a SELECT policy on submissions for anon users.
    const { error: insertError } = await supabase
      .from("submissions")
      .insert([
        {
          client_id: client.id,
          responses: responses,
        },
      ]);

    if (insertError) {
      const insertErrMsg = `Insert failed: ${insertError.message} (Code: ${insertError.code}). Please check RLS policy on 'submissions' table in Supabase.`;
      console.error("[Supabase] Failed inserting submission:", insertErrMsg);
      return {
        success: false,
        error: insertErrMsg,
      };
    }

    console.log("[Supabase] Questionnaire submission inserted successfully into submissions table.");
    return {
      success: true,
      data: { client_id: client.id, responses },
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
