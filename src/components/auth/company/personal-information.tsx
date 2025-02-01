import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StepForward } from 'lucide-react';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalInformation, PersonalInformationSchema } from "@/schemas/auth/personal-information-schema";
import { saveUserProfile } from "@/actions/auth/save-user-profile";
import useUserProfile from "@/hooks/use-auth";

type props = {
  nextStep: () => void;
  prevStep: () => void;
}

const PersonalInformation: React.FC<props> = ({ nextStep }) => {
  const { userId } = useUserProfile();
  const { register, handleSubmit, formState: { errors } } = useForm<PersonalInformationSchema>({
    resolver: zodResolver(personalInformation),
  });
  const onSubmit = (data: PersonalInformationSchema) => {
    saveUserProfile({ ...data, id: userId as string });
    nextStep();
  }
  return (
    <div className="flex flex-col gap-4 rounded-lg p-6 lg:h-[600px] lg:w-fit w-full">
      <span>
        <h1 className="font-bold text-dark text-2xl text-center">Personal information</h1>
        <p className="text-regular text-center font-md">Fill in your personal information to set up your account</p>
      </span>

      <div className="flex flex-col gap-6">
        <form className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:w-full" onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="first_name" className="text-dark font-semibold">
              First Name
            </Label>
            <Input
              id="first_name"
              placeholder="John"
              className="border-gray-400 focus:ring-blue-500"
              {...register("first_name")}
            />
            {errors.first_name && <span className="text-red-500">{errors.first_name.message}</span>}
          </div>

          {/* Lastname */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="last_name" className="text-dark font-semibold">
              Last Name
            </Label>
            <Input
              id="last_name"
              placeholder="Doe"
              className="border-gray-400 focus:ring-blue-500"
              {...register("last_name")}
            />
            {errors.last_name && <span className="text-red-500">{errors.last_name.message}</span>}
          </div>

          <div className="flex flex-col col-span-1 sm:col-span-2 gap-2">
            <Label htmlFor="address" className="text-dark font-semibold">
              Address
            </Label>
            <Input
              id="address"
              placeholder="1234 Elm Street"
              className="border-gray-400 focus:ring-blue-500"
              {...register("address")}
            />
            {errors.address && <span className="text-red-500">{errors.address.message}</span>}
          </div>

          {/* City */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="city" className="text-dark font-semibold">
              City
            </Label>
            <Input
              id="city"
              placeholder="Springfield"
              className="border-gray-400 focus:ring-blue-500"
              {...register("city")}
            />
            {errors.city && <span className="text-red-500">{errors.city.message}</span>}
          </div>

          {/* State */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="state" className="text-dark font-semibold">
              State
            </Label>
            <Input
              id="state"
              placeholder="Illinois"
              className="border-gray-400 focus:ring-blue-500"
              {...register("state")}
            />
            {errors.state && <span className="text-red-500">{errors.state.message}</span>}
          </div>

          {/* Country */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="country" className="text-dark font-semibold">
              Country
            </Label>
            <Input
              id="country"
              placeholder="United States"
              className="border-gray-400 focus:ring-blue-500"
              {...register("country")}
            />
            {errors.country && <span className="text-red-500">{errors.country.message}</span>}
          </div>

          {/* Postal code*/}
          <div className="flex flex-col gap-2">
            <Label htmlFor="postal_code" className="text-dark font-semibold">
              Postal Code
            </Label>
            <Input
              id="postal_code"
              placeholder="12345"
              className="border-gray-400 focus:ring-blue-500"
              {...register("postal_code")}
            />
            {errors.postal_code && <span className="text-red-500">{errors.postal_code.message}</span>}
          </div>

          {/* Botón de continuar */}
          <div className="col-span-1 sm:col-span-2">
            <Button
              className="bg-medium text-white hover:bg-medium/80 w-full px-4 py-2 mt-4 sm:mt-6 text-sm"
              type="submit"
            >
              <StepForward className="mr-2" />
              Continue
            </Button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default PersonalInformation;