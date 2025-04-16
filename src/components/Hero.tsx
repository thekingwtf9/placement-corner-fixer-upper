
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Ganga Mai Engineering College
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Empowering students with quality education and practical skills for a successful engineering career.
            AICTE approved institution committed to academic excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-white text-blue-800 hover:bg-gray-100 font-medium shadow-lg transform hover:scale-105 transition-transform">
              <a href="https://gangamaiengg.org.in/admissions" className="w-full h-full">Admission Enquiry</a>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-blue-800 font-medium shadow-lg transform hover:scale-105 transition-transform">
              <a href="https://gangamaiengg.org.in/courses" className="w-full h-full">Explore Programs</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
        <div 
          className="w-full h-full bg-contain bg-no-repeat bg-right" 
          style={{ backgroundImage: "url('https://gangamaiengg.org.in/assets/images/home/college.jpg')" }}
        ></div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-r from-blue-900/10 to-blue-700/10 backdrop-blur-sm"></div>
    </section>
  );
};

export default Hero;
