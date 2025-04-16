
import React from "react";
import { Mail, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-blue-700 text-white py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            <span className="text-sm">+91 1234567890</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2" />
            <span className="text-sm">placement@college.edu</span>
          </div>
        </div>
        <div>
          <a href="#" className="text-sm hover:underline">Student Login</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
