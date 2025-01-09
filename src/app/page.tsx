'use client';

import HomeNav from "@/components/navbars/home-nav";
import FeaturesGrid from "@/components/home/feature-card";


import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Comprobamos el scroll en el contenedor
      if (scrollContainerRef.current) {
        const isScrolled = scrollContainerRef.current.scrollTop > 50;
        setHasScrolled(isScrolled);
      }
    };

    // Añadimos el listener de scroll al contenedor
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      // Limpiamos el listener cuando el componente se desmonte
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="h-screen w-screen p-5 flex flex-col" >
      {/* Navbar */}
      <HomeNav hasScrolled={hasScrolled} />

      {/* Contenedor con snap scrolling */}
      <div className="flex-grow overflow-auto snap-y snap-mandatory scroll-smooth" ref={scrollContainerRef} >

        {/* Hero and CTA */}
        <section className="h-screen w-full snap-start flex justify-center items-center bg-gradient-to-b from-[#e2eefa] to-[hsl(0,0%,100%)] rounded-lg relative">
          <div className="h-full w-full flex flex-col justify-center items-center gap-5">
            <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-medium to-dark sm:text-xl md:text-7xl">
              Your Helpdesk. Reimagined
            </h1>
            <p className="text-xl sm:text-2xl md:text-xl font-bold text-center leading-relaxed bg-clip-text text-dark">
              Empower your support team with an unmatched solution.
            </p>
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
