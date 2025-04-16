
import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ganga Institute</h3>
            <p className="text-blue-200 mb-4">
              Dedicated to providing quality education and excellent placement opportunities for all our students.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-blue-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-blue-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-blue-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-blue-200 hover:text-white">Home</a></li>
              <li><a href="#about" className="text-blue-200 hover:text-white">About</a></li>
              <li><a href="#placements" className="text-blue-200 hover:text-white">Placements</a></li>
              <li><a href="#students" className="text-blue-200 hover:text-white">Student Corner</a></li>
              <li><a href="#contact" className="text-blue-200 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                <span className="text-blue-200">123 College Road, Education City, State - 123456</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span className="text-blue-200">+91 1234567890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span className="text-blue-200">placement@college.edu</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-blue-200 mb-4">
              Subscribe to our newsletter for placement updates and industry news.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-800"
              />
              <button 
                type="submit" 
                className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-6 text-center text-blue-300">
          <p>&copy; {new Date().getFullYear()} Ganga Institute Placement Corner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
