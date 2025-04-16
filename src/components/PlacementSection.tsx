
import React from "react";

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

  return (
    <section id="placements" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Placement Highlights</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our institution has a strong track record of placements with top companies across various sectors.
          </p>
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

        {/* Top Recruiters */}
        <div>
          <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Our Top Recruiters</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {topRecruiters.map((company, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg shadow text-center flex items-center justify-center h-24"
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
