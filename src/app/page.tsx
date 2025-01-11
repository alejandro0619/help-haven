'use client';

import HomeNav from "@/components/navbars/home-nav";
import FeaturesGrid from "@/components/home/feature-card";
import GetStarted from "@/components/home/get-started";
import Landing from "@/components/home/Landing";
import Princing from "@/components/home/Pricing";
import Footer from "@/components/footers/Footer";

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
      <div className="flex-grow overflow-y-auto lg:overflow-x-hidden lg:snap-y lg:snap-mandatory scroll-smooth scrollbar-thin " ref={scrollContainerRef} >

        {/* Hero and CTA */}
        <Landing />

        {/* Features */}
        <FeaturesGrid />
        {/* Get Started */}
        <GetStarted />

        {/* Pricing */}
        <Princing />

        {/* Footer */}
        <Footer />
      </div>

    </div>
  );
}
