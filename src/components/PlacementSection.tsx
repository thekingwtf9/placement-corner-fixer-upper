
import React from "react";
import { Building, Briefcase, Users, GraduationCap } from "lucide-react";

const PlacementSection = () => {
  // Sample placement statistics
  const stats = [
    { year: "2023", placements: 420, highestPackage: 42, averagePackage: 8.5 },
    { year: "2022", placements: 385, highestPackage: 38, averagePackage: 7.8 },
    { year: "2021", placements: 350, highestPackage: 35, averagePackage: 6.9 },
  ];

  // Sample top recruiters
  const topRecruiters = [
    "Microsoft", "Amazon", "Infosys", "TCS", "Wipro", 
    "Accenture", "Google", "IBM", "Deloitte", "KPMG"
  ];

  // Sample highlights
  const highlights = [
    { icon: Building, title: "500+", description: "Companies Visited" },
    { icon: Briefcase, title: "95%", description: "Placement Rate" },
    { icon: Users, title: "5000+", description: "Students Placed" },
    { icon: GraduationCap, title: "42 LPA", description: "Highest Package" },
  ];

  return (
    <section id="placements" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Placement Cell</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The Placement Cell at Ganga Mai Engineering College works tirelessly to connect our talented students with top companies across various sectors. We take pride in our excellent placement record.
          </p>
        </div>

        {/* Placement Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-blue-100 text-blue-700">
                  <item.icon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-blue-900">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Placement Statistics */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Placement Statistics</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-blue-700 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Year</th>
                  <th className="py-3 px-4 text-left">Students Placed</th>
                  <th className="py-3 px-4 text-left">Highest Package (LPA)</th>
                  <th className="py-3 px-4 text-left">Average Package (LPA)</th>
                </tr>
              </thead>
              <tbody>
                {stats.map((stat) => (
                  <tr key={stat.year} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{stat.year}</td>
                    <td className="py-3 px-4">{stat.placements}+</td>
                    <td className="py-3 px-4">{stat.highestPackage} LPA</td>
                    <td className="py-3 px-4">{stat.averagePackage} LPA</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Placement Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Placement Process</h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-4">1</div>
                <h4 className="font-semibold text-lg mb-2">Pre-Placement Training</h4>
                <p className="text-gray-600">Resume building, aptitude training and technical workshops</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-4">2</div>
                <h4 className="font-semibold text-lg mb-2">Campus Drives</h4>
                <p className="text-gray-600">Aptitude tests, technical and HR interviews</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-4">3</div>
                <h4 className="font-semibold text-lg mb-2">Placement</h4>
                <p className="text-gray-600">Offer letters, internships and final placements</p>
              </div>
            </div>
          </div>
        </div>

        {/* Top Recruiters */}
        <div>
          <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Our Top Recruiters</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {topRecruiters.map((company, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg shadow-md text-center flex items-center justify-center h-24 hover:shadow-lg transition-shadow"
              >
                <span className="font-medium text-gray-800">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementSection;
