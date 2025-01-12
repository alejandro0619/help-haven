'use server';

import { createClient } from "@/utils/supabase/server";

export const addProviderEmail = async (email: string, password: string) => {
  const client = await createClient();
  const { data, error } = await client.auth.signUp(
    {
      email,
      password,

    }
  )

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
