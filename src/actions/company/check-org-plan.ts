import { createClient } from '@/utils/supabase/server';

export async function validateOrganizationPlan(orgId: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('organizations')
    .select('subscription_plan')
    .eq('id', orgId)
    .single();

  if (error) throw new Error('Failed to fetch organization plan');
  return ['basic', 'pro'].includes(data.subscription_plan);
}
