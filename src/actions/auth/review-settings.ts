'use server';

import { createClient } from "@/utils/supabase/server";

type User = {
  first_name: string;
  last_name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  created_at: string;
  organization_id: string;
}
type SubscriptionPlan = "free" | "basic" | "enterprise";
type Organization = {
  name: string;
  status: string;
  country: string;
  address: string;
  subscription_plan: SubscriptionPlan;
  timezone: string;
}
export const getUserAndOrganization = async (profileId: string) => {
  const supabase = await createClient();

  try {

    const { data: userData, error: userError } = await supabase
      .from('profiles')
      .select(`
        first_name,
        last_name,
        address,
        city,
        state,
        country,
        created_at,
        organization_id
      `)
      .eq('user_id', profileId)
      .single();

    if (userError) {
      throw userError;
    }
    const { data: orgData, error: orgError } = await supabase
      .from('organizations')
      .select(`
        name,
        status,
        country,
        address,
        subscription_plan,
        timezone
        `)
      .eq('id', userData!.organization_id)
      .single();

    if (orgError) {
      throw orgError;
    }

    const { ...userInfo } = userData as User;
    const { ...orgInfo } = orgData as Organization;

    return {
      user: userInfo,
      organization: orgInfo,
    };
  } catch (error) {
    console.error("Error fetching user and organization data:", error);
    throw error;
  }
};
