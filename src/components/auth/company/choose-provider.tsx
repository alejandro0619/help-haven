import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Github, Mail } from 'lucide-react'
import { emailProvider, EmailProviderSchema } from "@/schemas/auth/email-provider-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { addProviderEmail } from "@/actions/auth/add-provider-email";
import useUserProfile from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";

type props = {
  nextStep: () => void;
}

const ChooseProvider: React.FC<props> = ({ nextStep }) => {
  const { saveUserId } = useUserProfile();
  const { register, handleSubmit, formState: { errors } } = useForm<EmailProviderSchema>({
    resolver: zodResolver(emailProvider)
  });
  const { toast } = useToast();

  const onSubmit = async (data: EmailProviderSchema) => {
    try {
      const { user } = await addProviderEmail(data.email, data.password)
      if (user) {
        saveUserId(user.id);
        toast({
          title: "Email added successfully",
          description: "Your email has been added successfully",
          variant: "default",
        });
        nextStep();
      }
    } catch (e) {
      console.error("Error adding provider email");
      toast({
        title: "Error adding email",
        description: "There was an error adding your email",
        variant: "destructive",
      });
    }


  }

  return (
    <div className="flex flex-col gap-4 rounded-lg p-6 lg:h-[600px] lg:w-fit w-full">
      <span>
        <h1 className="font-bold text-dark text-2xl text-center">Choose your provider</h1>
        <p className="text-regular text-center font-md">Enter your email below to save as your auth provider</p>
      </span>
      <div className="flex flex-col gap-6">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 lg:w-full">

          <Label className="text-dark font-semibold">Email</Label>
          <Input placeholder="company@example.com" className="border-gray-400 focus:ring-blue-500"{...register('email')} />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <Label className="text-dark font-semibold">Password</Label>
          <Input type="password" placeholder="password" className="border-gray-400 focus:ring-blue-500" {...register('password')} />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

          <Label className="text-dark font-semibold">Confirm your password</Label>
          <Input type="password" placeholder="password" className="border-gray-400 focus:ring-blue-500" {...register("confirmPassword")} />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}

          <Button
            className="bg-medium text-white hover:bg-medium/80 px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm mt-4"
            type="submit"

          >
            <Mail className="mr-2" /> Continue
          </Button>
        </form>
        <div className=" text-dark relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-light px-2 text-muted-foreground font-semibold rounded-lg p-2">
            Or continue with
          </span>
        </div>
        {/* Unavailable providers yet */}
        <div className="flex flex-col gap-2">
          <p className="text-gray-500 text-md opacity-60">Other providers coming soon</p>

          <Button
            className="bg-gray-300 text-gray-600 opacity-70 hover:opacity-80 px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm cursor-not-allowed"
            disabled
          >
            <Github className="mr-2" /> Github
          </Button>

          <Button
            className="bg-gray-300 text-gray-600 opacity-70 hover:opacity-80 px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm cursor-not-allowed"
            disabled
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mr-2">
              <path
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                fill="currentColor"
              />
            </svg>
            Google
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ChooseProvider;
