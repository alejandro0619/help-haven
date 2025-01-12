'use server';

import { createClient } from "@/utils/supabase/server";


export const assignOrgToProfile = async (profileId: string, orgId: string) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('profiles')
    .update({ organization_id: orgId })
    .eq('user_id', profileId)
    .select('first_name')

  if (error) {
    throw error;
  }

  return data;
}