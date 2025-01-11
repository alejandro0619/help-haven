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
        className={`fixed top-5 rounded-lg transition-all duration-1000 h-´40px] z-50 flex justify-between items-center w-[95%] p-2
      ${hasScrolled ? "bg-medium lg:w-[40%] p-2 lg:mx-auto sm:w-[95%]" : "w-[95%] p-2"}
      `}
      >
        {/* Left side of the navbar */}
        <div className="flex gap-3 items-center">
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
            href={`https://github.com/alejandro0619/help-haven`}
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
          <Link href={"#features-waitlist"}>
            <Button
              className={`
            ${hasScrolled ? "bg-light text-dark hover:bg-light/50" : "bg-dark text-light hover:bg-dark/50"}
            px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm
          `}
            >
              Join Waitlist
            </Button>
          </Link>
        </div>
      </nav>
    </section>

  );
};

export default HomeNav;
