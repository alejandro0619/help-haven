import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Props = {
  hasScrolled: boolean;
}
const HomeNav: React.FC<Props> = ({ hasScrolled }) => {

  return (
    <section className="flex justify-center">
      <nav
        className={`fixed top-5 rounded-lg transition-all duration-300 h-[50px] z-50 flex justify-between items-center
      ${hasScrolled ? "bg-medium w-[50%] p-5 mx-auto" : "w-[95%] p-5"}
      `}
      >
        {/* Left side of the navbar */}
        <div className="flex gap-2 items-center">
          <Link
            href={`/`}
            className={`
          text-base font-bold transition-all duration-300
          ${hasScrolled ? "text-light" : "text-dark"}
          sm:text-xl
        `}
          >
            HelpHaven
          </Link>
          <Separator
            orientation="vertical"
            className={`
          h-5 bg-dark transition-all duration-300 hidden sm:block
          ${hasScrolled ? "bg-light" : "bg-dark"}
        `}
          />
          <Link
            className={`${hasScrolled ? "text-light" : "text-dark"
              } font-bold text-sm`}
            href={`/`}
          >
            Github
          </Link>
          <Link
            className={`${hasScrolled ? "text-light" : "text-dark"
              } font-bold text-sm`}
            href={`/`}
          >
            Twitter
          </Link>
        </div>

        {/* Right side of the navbar */}
        <div className="flex items-center">
          <Button
            className={`
          ${hasScrolled ? "bg-light text-dark hover:bg-light/50" : "bg-dark text-light hover:bg-dark/50"}
          px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm
        `}
          >
            Join Waitlist
          </Button>
        </div>
      </nav>
    </section>

  );
};

export default HomeNav;
