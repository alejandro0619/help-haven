import ChooseProvider from "@/components/auth/company/choose-provider";
import PersonalInformation from "@/components/auth/company/personal-information";
import CreateOrganization from "@/components/auth/company/create-join-organization";
import ReviewSettings from "@/components/auth/company/review-settings";

import { useSteps } from "@/hooks/use-steps";



const SignUpPage = () => {

  const SignUpSteps = [
    {
      title: "Choose your provider",
      description: "Select your authentication provider to get started.",
    },
    {
      title: "Personal information",
      description: "Fill in your personal information to set up your account.",
    },
    {
      title: "Create your organization",
      description: "Create your organization and set up your workspace.",
    },
    {
      title: "Review your settings",
      description: "Review your settings and start using FlowTicket.",
    }
  ]

  const { currentStep, nextStep, prevStep, } = useSteps(SignUpSteps);
  const mapStepsIntoComponents = () => {
    switch (currentStep) {
      case 0:
        return <ChooseProvider nextStep={nextStep} />;
      case 1:
        return <PersonalInformation nextStep={nextStep} prevStep={prevStep} />;
      case 2:
        return <CreateOrganization nextStep={nextStep} />
      case 3:
        return <ReviewSettings nextStep={nextStep} />;
      default:
        return <ChooseProvider nextStep={nextStep} />;
    }
  }
  return (
    <main className="grid grid-cols-1 lg:grid-cols-4 gap-2 h-screen w-full p-2 over">
      {/* Sidebar */}
      <section className="col-span-1 lg:col-span-1 flex flex-col  justify-between relative rounded-lg" style={{
        backgroundImage: `url('/stacked-waves-haikei.svg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>

        <div className="absolute inset-0 bg-black opacity-50 z-5 rounded-lg"></div>

        <div className="z-10 px-5 lg:mt-[3rem] h-fit">
          <h1 className="font-bold text-xl text-left  text-light ">Welcome to FlowTicket</h1>
          <p className="font-regular text-left text-muted ">Follow these steps to get started with us</p>
        </div>

        <section className="px-5 flex flex-col gap-6 h-full z-10">
          {SignUpSteps.map((step, index) => (
            <div key={index} className="relative flex items-center p-2 rounded-lg">
              {/* Step Icon */}
              <div
                className={`absolute left-auto top-auto w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold z-10 ${currentStep === index ? 'bg-light text-dark' : 'bg-gray-500 text-light'
                  }`}
              >
                {index + 1}
              </div>

              {/* Step Description */}
              <div className="ml-12 p-4 w-full">
                <p className="font-semibold text-left text-light">{step.title}</p>
                <p className="font-regular text-left text-light">{step.description}</p>
              </div>
            </div>
          ))}
        </section>
        <p className="text-left z-10 text-light font-semibold p-5">
          Need help? <a href="#" className="text-blue-500">Contact support</a>
        </p>
      </section>

      {/* Main Content */}
      <section className=" col-span-1 lg:col-span-3 rounded-lg bg-gradient-to-b from-[#e2eefa] to-[#ffffff]">

        <div className="h-full flex flex-col items-center justify-center gap-5">

          {mapStepsIntoComponents()}
        </div>
      </section>
    </main >
  )
}

export default SignUpPage;
