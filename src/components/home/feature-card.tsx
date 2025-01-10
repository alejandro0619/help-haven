import { Card } from "@/components/ui/card";
import { Smile, Github, Cloud, Key, TrendingUp, ChevronsUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const BentoGrid = () => {
  return (
    <section className="pt-4 flex items-center h-screen w-full snap-start bg-gradient-to-b from-[#e2eefa] to-[#ffffff] overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-medium mb-2 lg:mb-14">
          Our Amazing Features
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">

          {/* Cards for small screens (Mobile Layout) */}
          <div className="col-span-1">
            <Card className="bg-light p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center sm:items-start">
              <span className="w-full flex justify-center"> <Smile className="text-dark w-10 h-10 mb-4" /></span>
              <h3 className="text-lg font-bold text-dark mb-2 text-center w-full"> UI / UX made with 💓</h3>
            </Card>
          </div>

          <div className="col-span-1">
            <Card className="bg-light p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center sm:items-start">
              <span className="w-full flex justify-center"> <Cloud className="text-dark w-10 h-10 mb-4" /> </span>
              <h3 className="text-lg font-bold text-dark mb-2 text-center w-full">Cloud based infrastructure</h3>
            </Card>
          </div>

          <div className="col-span-1">
            <Card className="bg-light p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center sm:items-start">
              <span className="w-full flex justify-center"><Key className="text-dark w-10 h-10 mb-4" /></span>
              <h3 className="text-lg font-bold text-dark mb-2 text-center w-full">Super secure & private</h3>
            </Card>
          </div>

          <div className="col-span-1">
            <Card className="bg-light p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center sm:items-start">
              <span className="w-full flex justify-center"> <TrendingUp className="text-dark w-10 h-10 mb-4" /> </span>
              <h3 className="text-lg font-bold text-dark mb-2 text-center w-full ">We grow with you</h3>
            </Card>
          </div>

          {/* Large feature card for input (Full width on mobile) */}
          <div className="sm:col-span-2 lg:col-span-4 col-span-2">
            <div className="bg-light p-5 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-around lg:h-[150px]">
              <div className="flex-col text-center sm:text-left ">
                <h3 className="text-lg lg:text-3xl font-bold text-dark mb-2 flex w-full justify-center items-center gap-2">Ready to <ChevronsUp /> your productivity?</h3>
                <p className="text-sm font-semibold text-dark hidden lg:block">
                  Get started with HelpHaven today and see the difference for yourself.
                </p>
              </div>
              <div className="flex flex-col gap-2 w-full sm:w-auto sm:flex-row sm:items-center">
                <Input
                  type="email"
                  placeholder="Join the waitlist"
                  className="w-full sm:w-[300px] border-medium font-semibold text-dark"
                />
                <Button type="submit" className="bg-medium w-full sm:w-auto">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
