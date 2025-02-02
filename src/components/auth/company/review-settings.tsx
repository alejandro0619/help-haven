'use client';
import { useRouter } from "next/navigation";
import { getUserAndOrganization } from "@/actions/auth/review-settings";
import { useEffect, useState } from "react";
import useAuth from "@/hooks/use-auth";
import { Building } from "lucide-react";
import Avvvatars from "avvvatars-react"

type Props = {
  nextStep: () => void;
};
type SubscriptionPlan = "free" | "basic" | "enterprise";

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
type Organization = {
  name: string;
  status: string;
  country: string;
  address: string;
  subscription_plan: SubscriptionPlan;
  timezone: string;
}

const plansStyles: Record<SubscriptionPlan, string> = {
  free: "bg-green-500 text-white px-2 py-1 text-sm w-[80px] text-center",
  basic: "bg-blue-500 text-white px-2 py-1 text-sm w-[80px] text-center",
  enterprise: "bg-purple-500 text-white px-2 py-1 text-sm w-[80px] text-center",
};
const ReviewSettings: React.FC<Props> = () => {
  const { userId } = useAuth();
  const [user, setUser] = useState<User | null>(null);
  const [organization, setOrganization] = useState<Organization | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (userId) {

      getUserAndOrganization(userId)
        .then((data) => {
          console.log("Data fetched:", data);
          setUser(data.user);
          setOrganization(data.organization);
        })
        .catch((error) => {
          console.error("Error fetching user and organization data:", error);
        });
    } else {
      console.log("userId is not defined yet.");
    }
  }, [userId]);

  const handleContinue = () => {
    router.push("/company/dashboard");
  }

  return (
    <div className="flex items-center justify-around gap-6 rounded-lg p-6 lg:h-[600px] lg:w-[80%] w-full">
      <span>
        <h1 className="font-bold text-dark text-4xl text-center">
          Review your Settings
        </h1>
        <p className="text-regular text-center font-2xl">
          This is your pass to the FlowTicket world.
        </p>
      </span>
      <div className="relative w-[350px] min-h-[500px] rounded-xl shadow-2xl overflow-hidden border border-white/30 bg-white/30 backdrop-blur-md carnet-3d">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-300"></div>

        {/* Content container */}
        <div className="p-6 relative z-10">

          <section className="w-full flex flex-col items-center gap-4 mb-6">
            <div className="rounded-full border-4 border-white shadow-lg">

              <Avvvatars value={`${user?.first_name} ${user?.last_name}`} size={100} style="shape" />
            </div>
            <p className="text-xl font-bold text-gray-800">{`${user?.first_name} ${user?.last_name}`} </p>
            <p className="text-sm text-gray-600 font-bold">Since {new Date(user?.created_at as string).toDateString()}</p>
          </section>

          {/* Organization details (if available) */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-gray-700">
                <Building size={24} />
              </span>
              <p className="text-lg font-semibold text-gray-800">{organization?.name}</p>
            </div>
            <div className="flex items-center gap-3">
              <strong className="text-gray-700">Plan:</strong>
              <span className={`${plansStyles[organization?.subscription_plan as SubscriptionPlan]} rounded-lg`}>BASIC</span>
            </div>
            <div className="space-y-2">
              <p className="text-gray-700"><strong>Country:</strong> {organization?.country}</p>
              <p className="text-gray-700"><strong>Address:</strong> {organization?.address}</p>
              <p className="text-gray-700"><strong>Timezone:</strong> {organization?.timezone.toLocaleUpperCase()}</p>
            </div>
          </section>


        </div>

      </div>

      <button onClick={ handleContinue} className="absolute bottom-5 right-5 py-2 w-fit h-fit hover:bg-dark hover:text-white text-dark bg-white rounded-lg px-4 transition duration-500">
        <span className="text-sm font-semibold">Continue</span>
      </button>

    </div>
  );
};

export default ReviewSettings;
