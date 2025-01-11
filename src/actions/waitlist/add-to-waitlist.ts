'use server';

import { createClient } from "@/utils/supabase/client";

export default async function handler(email: string): Promise<{ success: boolean, error?: string }> {
  const supabase = createClient();
  const { data, error } = await supabase.from('waitlist').insert([{ email }]);
  if (error) {
    return {
      success: false,
      error: error.message,
    };
  }
  return {
    success: true,

  };
}