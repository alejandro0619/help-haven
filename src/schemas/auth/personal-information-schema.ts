import { z } from "zod";

export const personalInformation = z.object({
  first_name: z
    .string()
    .nonempty("First Name is required")
    .max(50, "First Name must be less than 50 characters"),
  last_name: z
    .string()
    .nonempty("Last Name is required")
    .max(50, "Last Name must be less than 50 characters"),
  address: z
    .string()
    .nonempty("Address is required")
    .max(100, "Address must be less than 100 characters"),
  city: z
    .string()
    .nonempty("City is required")
    .max(50, "City must be less than 50 characters"),
  state: z
    .string()
    .nonempty("State is required")
    .max(50, "State must be less than 50 characters"),
  country: z
    .string()
    .nonempty("Country is required")
    .max(50, "Country must be less than 50 characters"),
  postal_code: z
    .string()
    .nonempty("Postal Code is required")
    .regex(/^\d{4}$/, "Postal Code must be a 4-digit number"),

});


export type PersonalInformationSchema = z.infer<typeof personalInformation>;
