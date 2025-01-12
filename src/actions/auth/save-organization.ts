'use server';
import { OrganizationSchema } from "@/schemas/auth/create-organization";
import { createClient } from "@/utils/supabase/server";

type Organization = OrganizationSchema & { status: "active" | "pending" | "inactive", timezone: string, subscription_plan: string };
export const saveOrganization = async (organization: Organization) => {
  const supabase = await createClient();
  const { data, error } = await supabase.from("organizations").insert([organization]).select("id").single();
  if (error) {
    throw error;
  }
  return data;
};