'use server';


import { createClient } from "@/utils/supabase/server";
import { PersonalInformationSchema } from "@/schemas/auth/personal-information-schema";

type Profile = PersonalInformationSchema & { id: string };
  
export const saveUserProfile = async (user: Profile) => {
  console.log(user);
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('profiles')
    .upsert({
      first_name: user.first_name,
      last_name: user.last_name,
      address: user.address,
      city: user.city,
      country: user.country,
      postal_code: user.postal_code,
      state: user.state,
      user_id: user.id,
    });

  console.log(data, error);
  if (error) {
    throw error;
  }

  return data;
};
