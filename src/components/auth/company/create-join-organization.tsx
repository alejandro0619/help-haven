import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { OrganizationSchema, organization } from '@/schemas/auth/create-organization';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from '@/components/ui/select';
import React from 'react';
import { StepForward } from 'lucide-react';
import { saveOrganization } from '@/actions/auth/save-organization';
import { assignOrgToProfile } from '@/actions/auth/asign-org-to-profile';
import useAuth from '@/hooks/use-auth';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';

type props = {
  nextStep: () => void;
}
const CreateOrganization: React.FC<props> = ({ nextStep }) => {
  const [plan, setPlan] = React.useState<string>('');
  const [timezone, setTimezone] = React.useState<string>('');
  const { userId } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm<OrganizationSchema>({
    resolver: zodResolver(organization)
  });
  const { toast } = useToast();
  
  const onSubmit = async (data: OrganizationSchema) => {

    try {
      const { id } = await saveOrganization({ ...data, status: "inactive", timezone, subscription_plan: plan });
      
      await assignOrgToProfile(userId!, id);
      toast({
        title: "Organization saved successfully",
        description: "Your organization has been saved successfully",
        variant: "default",
      });
      nextStep();
    } catch (error) {
      console.error("Error saving organization");
      toast({
        title: "Error saving organization",
        description: "There was an error saving your organization",
        variant: "destructive",
      });

    }
  };

  return (
    <div className="flex flex-col gap-4 rounded-lg p-6 lg:h-[600px] lg:w-fit w-full">
      <span>
        <h1 className="font-bold text-dark text-2xl text-center">Setup your Org</h1>
        <p className="text-regular text-center font-md">Create your Org or just join an existing one.</p>
      </span>
      <div className="flex flex-col gap-6">

        <form onSubmit={handleSubmit(onSubmit, () => console.log("hay error", errors))} className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:w-full">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="text-dark font-semibold">Organization name:</Label>
            <Input
              type="text"
              id="name"
              className="border-gray-400 focus:ring-blue-500"
              {...register('name')}
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>

          {/* Country */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="country" className="text-dark font-semibold">Country:</Label>
            <Input
              type="text"
              id="country"
              className="border-gray-400 focus:ring-blue-500"
              {...register('country')}
            />
            {errors.country && <p className="text-red-500">{errors.country.message}</p>}
          </div>

          {/* Address */}
          <div className="flex flex-col gap-2 col-span-1 sm:col-span-2">
            <Label htmlFor="address" className="text-dark font-semibold">Address:</Label>
            <Input
              type="text"
              id="address"
              className="border-gray-400 focus:ring-blue-500"
              {...register('address')}
            />
            {errors.address && <p className="text-red-500">{errors.address.message}</p>}
          </div>

          {/* Subscription Plan */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="subscription_plan" className="text-dark font-semibold">Subscription Plan:</Label>
            <Select
              onValueChange={(value: string) => setPlan(value)}
            >
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a plan" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="free" className='font-semibold '>🆓 Free: <span className='font-regular text-gray-500'>Perfect for Demos</span></SelectItem>
                <SelectItem value="basic" className='font-semibold '>💻 Basic: <span className='font-regular text-gray-500'>Suits the needs of a small company</span></SelectItem>
                <SelectItem value="enterprise" className='font-semibold '>🏢 Enterprise: <span className='font-regular text-gray-500'>We grow as your company</span></SelectItem>

              </SelectContent>
              <span className='font-regular text-gray-500 text-sm mt-2'>
                Check here for more details on our <Link href="/" className='text-blue-500'>pricing plans</Link>
              </span>
            </Select>
          </div>

          {/* Timezone */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="timezone" className="text-dark font-semibold">Timezone:</Label>
            <Select onValueChange={(value: string) => setTimezone(value)}>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>North America</SelectLabel>
                  <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                  <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                  <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                  <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                  <SelectItem value="nt">Newfoundland Time (NT)</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Europe & Africa</SelectLabel>
                  <SelectItem value="cet">Central European Time (CET)</SelectItem>
                  <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                  <SelectItem value="west">Western European Summer Time (WEST)</SelectItem>
                  <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                  <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                  <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                  <SelectItem value="weste">Western European Time (WET)</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Asia</SelectLabel>
                  <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                  <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
                  <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                  <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
                  <SelectItem value="myt">Malaysia Time (MYT)</SelectItem>
                  <SelectItem value="phst">Philippine Standard Time (PST)</SelectItem>
                  <SelectItem value="sgt">Singapore Time (SGT)</SelectItem>
                  <SelectItem value="mmt">Myanmar Time (MMT)</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Australia & Pacific</SelectLabel>
                  <SelectItem value="awst">Australian Western Standard Time (AWST)</SelectItem>
                  <SelectItem value="acst">Australian Central Standard Time (ACST)</SelectItem>
                  <SelectItem value="aest">Australian Eastern Standard Time (AEST)</SelectItem>
                  <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
                  <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                  <SelectItem value="chxt">Christmas Island Time (CXT)</SelectItem>
                  <SelectItem value="pet">Peru Time (PET)</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>South America</SelectLabel>
                  <SelectItem value="art">Argentina Time (ART)</SelectItem>
                  <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                  <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                  <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
                  <SelectItem value="uyt">Uruguay Time (UYT)</SelectItem>
                  <SelectItem value="sant">Santiago Time (SANT)</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Other Zones</SelectLabel>
                  <SelectItem value="utc">Coordinated Universal Time (UTC)</SelectItem>
                  <SelectItem value="aet">Australian Eastern Time (AET)</SelectItem>
                  <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                  <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                  <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                  <SelectItem value="ast">Atlantic Standard Time (AST)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="col-span-1 lg:col-span-2">
            Join an existing organization? <Link href="/" className="text-blue-500">Click here</Link>
            <Button
              type="submit"
              className="bg-medium text-white hover:bg-medium/80 w-full px-4 py-2 mt-4 sm:mt-6 text-sm"
            >
              <StepForward className="mr-2" />
              Create Organization
            </Button>
          </div>
        </form>
      </div>
    </div >
  );
};

export default CreateOrganization;