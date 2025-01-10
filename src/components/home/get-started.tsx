import { Settings, UserRoundPlus, UsersRound } from "lucide-react"

const GetStarted = () => {
  return (
    <section
      className="h-screen snap-center bg-gradient-to-b from-[#e2eefa] to-[#ffffff] rounded-lg relative pt-5"
      style={{
        backgroundImage: `url('/stacked-waves-haikei.svg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >

      <div className="h-full flex flex-col lg:flex-row items-center justify-center gap-5">

        <h2 className="text-dark font-semibold text-4xl text-center lg:text-left ">
          Get started into the{" "}
          <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-medium to-dark">
            FLOW
          </span>{" "}
          in 3 steps:
        </h2>


        <div className="flex flex-col items-center justify-center gap-12 mt-8 lg:mt-0">
          {/* Step 1 */}
          <div className="flex items-center gap-6 bg-[#e2eefa] p-6 rounded-lg shadow-lg w-fit lg:w-[300px]">
            <div>
              <span className="flex items-center font-semibold text-dark gap-3 border-solid border-2 border-light bg-medium rounded-2xl w-fit p-2">
                <UserRoundPlus size={30} className="text-light" />
              </span>
              <p className="font-semibold text-medium text-xl">Create your account</p>
              <p className="text-md text-medium hidden lg:block">
                Start your journey right away!
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-6 bg-[#e2eefa] p-6 rounded-lg shadow-lg w-fit lg:w-[300px]">
            <div>
              <span className="flex items-center font-semibold w-fit p-2 bg-medium rounded-2xl text-dark gap-3 border-solid border-light border-2">
                <Settings size={30} className="text-light" />
              </span>
              <p className="font-semibold text-medium text-xl">Set up your workspace</p>
              <p className="text-md text-medium hidden lg:block">
                Customize your environment to fit your team’s needs.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-6 bg-[#e2eefa] p-6 rounded-lg shadow-lg w-fit lg:w-[300px]">
            <div>
              <span className="flex items-center font-semibold gap-3 w-fit p-2 bg-medium rounded-2xl text-dark border-solid border-light border-2">
                <UsersRound size={30} className="text-light" />
              </span>
              <p className="font-semibold text-medium text-xl">Start Collaborating</p>
              <p className="text-md text-medium hidden lg:block">
                Invite your team, manage tasks, and offer stellar support right away!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default GetStarted;
