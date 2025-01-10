'use client';

import HomeNav from "@/components/navbars/home-nav";
import FeaturesGrid from "@/components/home/feature-card";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";
import { LogIn, Settings, UserRoundPlus, UsersRound } from "lucide-react";

export default function Home() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {

      if (scrollContainerRef.current) {
        const isScrolled = scrollContainerRef.current.scrollTop > 50;
        setHasScrolled(isScrolled);
      }
    };


    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {

      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="h-screen w-screen p-2 flex flex-col" >
      {/* Navbar */}
      <HomeNav hasScrolled={hasScrolled} />

      {/* Snap Scrolling container */}
      <div className="flex-grow overflow-y-auto overflow-x-hidden snap-y snap-proximity scroll-smooth scrollbar-thin " ref={scrollContainerRef} >

        {/* Hero and CTA */}
        <section className="h-screen w-full snap-start flex justify-center items-center bg-gradient-to-b from-[#e2eefa] to-[hsl(0,0%,100%)] rounded-lg relative">
          <div className="h-full w-full flex flex-col justify-center items-center gap-5">
            <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-medium to-dark sm:text-xl md:text-7xl">
              Your Helpdesk. Reimagined
            </h1>
            <p className="text-xl sm:text-2xl md:text-xl font-bold text-center leading-relaxed bg-clip-text text-dark">
              Empower your support team with an unmatched solution.
            </p>
            <button className="bg-dark text-light p-4 rounded-lg hover:bg-dark/50 transition-colors duration-300 font-bold ">
              Get Started
            </button>
          </div>
        </section>

        {/* Features */ }
        <section className="h-screen w-full snap-start bg-gradient-to-b from-[#ffffff] to-[#e2eefa] ">
          <FeaturesGrid />
        </section>
        <div className="h-screen snap-start bg-gradient-to-b from-[#e2eefa] to-[hsl(0,0%,100%)] rounded-lg relative">

          <div className="bg-light h-96 flex items-center justify-center gap-10 ">
            <h2 className="text-dark font-semibold text-4xl">Get started in <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-medium to-dark ">three</span> steps:</h2>
            <div className="mt-16 flex flex-col items-center justify-center gap-12 relative">
              {/* Step 1 */}
              <div className="flex items-center gap-6 bg-[#e2eefa] p-6 rounded-lg shadow-lg w-[300px]">

                <div>
                  <span className="flex items-center font-semibold text-dark gap-3"> <UserRoundPlus size={30} className="text-dark"/> Sign up </span>
                  <p className="text-sm text-medium">Create your account in seconds and start your journey with HelpHaven.</p>
                </div>

              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-6 bg-[#e2eefa] p-6 rounded-lg shadow-lg w-[300px]">
                <div>
                  <span className="flex items-center font-semibold text-dark gap-3"> <Settings size={30} className="text-dark"/> Set up your workspace </span>
                  <p className="text-sm text-medium">Customize your environment to fit your team’s needs.</p>
                </div>
              </div>


              {/* Step 3 */}
              <div className="flex items-center gap-6 bg-[#e2eefa] p-6 rounded-lg shadow-lg w-[300px]">
                <div>
                  <span className="flex items-center font-semibold text-dark gap-3"> <UsersRound size={30} className="text-dark"/> Start collaborating </span>
                  <p className="text-sm text-medium">Invite your team, manage tasks, and offer stellar support right away!</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img src="/stacked-waves-haikei.svg" alt="Decorative Section" className="w-full h-auto" />
          </div>

          <footer className="bg-[#427AA1] py-16 text-light text-center h-[400px]">
            <h2 className="font-bold text-2xl">Footer Section</h2>
            <p className="mt-4 text-sm">This is the footer content that blends with the SVG.</p>
          </footer>
        </div>

      </div>
    </div>
  );
}
