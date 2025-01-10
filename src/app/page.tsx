'use client';

import HomeNav from "@/components/navbars/home-nav";
import FeaturesGrid from "@/components/home/feature-card";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";

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
      </div>
    </div>
  );
}
