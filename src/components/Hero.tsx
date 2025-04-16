
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to the Placement Corner
          </h1>
          <p className="text-xl mb-8">
            Connecting bright students with excellent career opportunities. 
            Our placement cell works tirelessly to help you achieve your dream job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-white text-blue-800 hover:bg-gray-100">
              Explore Opportunities
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-blue-700">
              Contact Placement Cell
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10">
        <div className="w-full h-full bg-contain bg-no-repeat bg-right-bottom" 
             style={{ backgroundImage: "url('/placeholder.svg')" }}></div>
      </div>
    </section>
  );
};

export default Hero;
