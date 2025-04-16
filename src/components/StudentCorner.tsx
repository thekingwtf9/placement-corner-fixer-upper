
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const StudentCorner = () => {
  const resources = [
    {
      title: "Resume Builder",
      description: "Create professional resumes with our easy-to-use template builder",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Interview Preparation",
      description: "Comprehensive guides and mock interview sessions to help you prepare",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
    },
    {
      title: "Aptitude Tests",
      description: "Practice tests to improve your aptitude and reasoning skills",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      title: "Upcoming Events",
      description: "Stay updated with upcoming placement drives and recruitment events",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    }
  ];

  return (
    <section id="students" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Student Corner</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Access resources and tools designed to help you prepare for and excel in your placement journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="border-t-4 border-blue-600">
              <CardHeader className="pb-2">
                <div className="mb-2">{resource.icon}</div>
                <CardTitle className="text-xl text-blue-900">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {resource.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Access Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-blue-800 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Placement Assistance Program</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Register for our exclusive placement assistance program and get personalized guidance from industry experts.
          </p>
          <Button className="bg-white text-blue-800 hover:bg-gray-100">Register Now</Button>
        </div>
      </div>
    </section>
  );
};

export default StudentCorner;
