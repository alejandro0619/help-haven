import { z } from "zod";

export const organization = z.object({
  name: z.string().min(1, 'Name is required'),
  country: z.string().min(1, 'Country is required'),
  address: z.string().min(1, 'Address is required'),

});

export type OrganizationSchema = z.infer<typeof organization>;