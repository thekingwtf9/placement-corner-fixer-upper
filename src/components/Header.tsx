
import React from "react";
import { Mail, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-blue-800 text-white py-2">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex flex-col sm:flex-row items-center sm:space-x-6 mb-2 sm:mb-0">
          <div className="flex items-center mb-1 sm:mb-0">
            <Phone className="h-4 w-4 mr-2" />
            <span className="text-sm">+91 0120-2657095, 2657096</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2" />
            <span className="text-sm">info@gangamaiengg.org.in</span>
          </div>
        </div>
        <div className="flex space-x-6">
          <a href="https://erp.gangamaiengg.org.in/Student" className="text-sm hover:underline transition-colors">Student Login</a>
          <a href="https://erp.gangamaiengg.org.in/Faculty" className="text-sm hover:underline transition-colors">Faculty Login</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
