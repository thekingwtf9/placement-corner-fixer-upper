
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">About Ganga Mai Engineering College</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A premier institution committed to providing quality education in engineering and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://gangamaiengg.org.in/wp-content/uploads/2019/11/about-image.jpg" 
              alt="College Campus" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Vision</h3>
            <p className="text-gray-600 mb-6">
              To be a center of excellence in technical education, producing competent engineers with social responsibility, ethical values, and leadership qualities.
            </p>
            
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Mission</h3>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li className="flex items-start">
                <span className="text-blue-700 font-bold mr-2">•</span>
                <span>To provide quality education through innovative teaching-learning processes</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 font-bold mr-2">•</span>
                <span>To establish industry-institute interaction for practical training of students</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 font-bold mr-2">•</span>
                <span>To create an environment for students to develop their entrepreneurial skills</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 font-bold mr-2">•</span>
                <span>To inculcate in students ethical values and sense of social responsibility</span>
              </li>
            </ul>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-800 text-xl mb-1">25+</h4>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-800 text-xl mb-1">100+</h4>
                <p className="text-gray-600">Faculty Members</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-800 text-xl mb-1">5000+</h4>
                <p className="text-gray-600">Alumni Network</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-800 text-xl mb-1">AICTE</h4>
                <p className="text-gray-600">Approved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
