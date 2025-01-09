import { Card } from "@/components/ui/card";
import { Smile, Github, Cloud, Key, TrendingUp } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const BentoGrid = () => {
  return (
    <section className="px-4 py-16 flex items-center h-full">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-medium mb-12">
          Our Amazing Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {/* Large feature card */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <Card className="bg-light p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <div className="flex items-center  gap-4 mb-4">
                <Smile className="text-dark" />
                <h3 className="text-xl font-bold text-dark">Visually stunning</h3>
              </div>
              <p className="text-sm font-semibold text-dark">
                UI designed to be a pleasure to use, with a focus on simplicity and ease of use.
              </p>
            </Card>
          </div>

          {/* Small feature card */}
          <Card className="bg-light p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <Cloud className="text-dark w-6 h-6" />
              <h3 className="text-xl font-bold text-dark">Cloud based</h3>
            </div>
            <p className="text-sm font-semibold text-dark">
              Access your data from anywhere and on any device, thanks to our cloud infrastructure
            </p>
          </Card>

          {/* Tall feature card */}
          <Card className="bg-light p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <Key className="text-dark w-6 h-6" />
              <h3 className="text-xl font-bold text-dark">Super secure</h3>
            </div>
            <p className="text-sm font-semibold text-dark">
              Easily manage user authentication with flexible integration options tailored to your needs.
            </p>
          </Card>

          {/* Medium feature card */}
          <Card className="bg-light p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <TrendingUp className="text-dark w-6 h-6" />
              <h3 className="text-xl font-bold text-dark">We grow with you</h3>
            </div>
            <p className="text-sm font-semibold text-dark">
              Scale efficiently as your needs increase.
            </p>
          </Card>

          {/* Small feature card */}
          <Card className="bg-light p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <Github className="text-dark w-6 h-6" />
              <h3 className="text-xl font-bold text-dark">Need a feature?</h3>
            </div>
            <p className="text-sm font-semibold text-dark">
              Join a growing community, contribute, and adapt the solution to your needs with our open-source approach
            </p>
          </Card>

          {/* Large feature card */}
          <div className="col-span-2 md:col-span-1 lg:col-span-3 lg:row-span-1">
            <div className="bg-light p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl flex gap-2 items-center h-full">
              <span className="flex flex-col">
                <h3 className="text-3xl font-bold text-dark"> Ready to boost your productivity?</h3>
                <p className="text-sm font-semibold text-dark">
                  Get started with HelpHaven today and see the difference for yourself.
                </p>
              </span>
              <Input type="email" placeholder="Join the waitlist" className="w-[300px] border-medium font-semibold text-dark" />
              <Button type="submit" className="bg-medium">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
