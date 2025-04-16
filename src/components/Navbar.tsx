
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/placeholder.svg" alt="College Logo" className="h-12 mr-3" />
            <div>
              <h1 className="text-2xl font-bold text-blue-900">Ganga Institute</h1>
              <p className="text-sm text-gray-600">Placement Corner</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-blue-900 font-medium hover:text-blue-700">Home</a>
            <a href="#about" className="text-gray-600 hover:text-blue-700">About</a>
            <a href="#placements" className="text-gray-600 hover:text-blue-700">Placements</a>
            <a href="#students" className="text-gray-600 hover:text-blue-700">Student Corner</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-700">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-3">
            <a href="/" className="block text-blue-900 font-medium hover:text-blue-700">Home</a>
            <a href="#about" className="block text-gray-600 hover:text-blue-700">About</a>
            <a href="#placements" className="block text-gray-600 hover:text-blue-700">Placements</a>
            <a href="#students" className="block text-gray-600 hover:text-blue-700">Student Corner</a>
            <a href="#contact" className="block text-gray-600 hover:text-blue-700">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
