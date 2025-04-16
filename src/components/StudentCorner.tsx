
import React from "react";
import { Book, Calendar, Download, Award } from "lucide-react";

const StudentCorner = () => {
  const resources = [
    { 
      icon: Book, 
      title: "E-Learning Portal", 
      description: "Access online lectures, tutorials and study materials",
      link: "https://gangamaiengg.org.in/student-corner/e-learning/"
    },
    { 
      icon: Calendar, 
      title: "Academic Calendar", 
      description: "Stay updated with important dates and events",
      link: "https://gangamaiengg.org.in/student-corner/academic-calendar/"
    },
    { 
      icon: Download, 
      title: "Downloads", 
      description: "Access important forms, syllabi and other documents",
      link: "https://gangamaiengg.org.in/student-corner/downloads/"
    },
    { 
      icon: Award, 
      title: "Student Achievements", 
      description: "Celebrating our students' accomplishments",
      link: "https://gangamaiengg.org.in/student-corner/achievements/"
    },
  ];

  return (
    <section id="students" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Student Corner</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Access resources, information and facilities designed to enrich your academic journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-blue-100 text-blue-700">
                  <item.icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2 text-center">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.description}</p>
              <div className="mt-4 text-center">
                <a href={item.link} className="text-blue-700 hover:underline font-medium">Learn More</a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Student Testimonials</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 italic mb-4">
                "My experience at Ganga Mai Engineering College has been transformative. The faculty members are highly knowledgeable and supportive, and the placement cell worked tirelessly to help me secure a position at my dream company."
              </p>
              <div className="flex items-center">
                <div className="bg-blue-200 h-10 w-10 rounded-full mr-3 overflow-hidden">
                  <img src="https://gangamaiengg.org.in/wp-content/uploads/2019/11/student1.jpg" alt="Student" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900">Rahul Sharma</h4>
                  <p className="text-sm text-gray-500">B.Tech Computer Science, 2022</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 italic mb-4">
                "The practical approach to learning and state-of-the-art facilities at Ganga Mai Engineering College prepared me well for the industry. The placement opportunities provided by the college helped me start my career on a strong note."
              </p>
              <div className="flex items-center">
                <div className="bg-blue-200 h-10 w-10 rounded-full mr-3 overflow-hidden">
                  <img src="https://gangamaiengg.org.in/wp-content/uploads/2019/11/student2.jpg" alt="Student" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900">Priya Patel</h4>
                  <p className="text-sm text-gray-500">B.Tech Electronics, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentCorner;
