import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StepForward } from 'lucide-react';

type props = {
  nextStep: () => void;
  prevStep: () => void;
}
const PersonalInformation: React.FC<props> = () => {
  return (
    <div className="flex flex-col gap-4 rounded-lg p-6 lg:h-[600px] lg:w-fit w-fulll">
      <span>
        <h1 className="font-bold text-dark text-2xl text-center">Personal information</h1>
        <p className="text-regular text-center font-md">Fill in your personal information to set up your account</p>
      </span>

      <div className="flex flex-col gap-6">
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:w-full">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="first_name" className="text-dark font-semibold">
              First Name
            </Label>
            <Input
              id="first_name"
              placeholder="John"
              className="border-gray-400 focus:ring-blue-500"
            />
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
            />
          </div>

          {/* Email */}
          <div className="flex flex-col col-span-1 sm:col-span-2 gap-2">
            <Label htmlFor="email" className="text-dark font-semibold">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john.doe@example.com"
              className="border-gray-400 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col col-span-1 sm:col-span-2 gap-2">
            <Label htmlFor="address" className="text-dark font-semibold">
              Address
            </Label>
            <Input
              id="address"
              placeholder="1234 Elm Street"
              className="border-gray-400 focus:ring-blue-500"
            />
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
            />
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
            />
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
            />
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
            />
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