
import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ganga Mai Engineering College</h3>
            <p className="text-blue-200 mb-4">
              Dedicated to providing quality education and excellent placement opportunities for all our students.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/gangamaiengineeringcollege/" className="text-white hover:text-blue-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/GMECNoida" className="text-white hover:text-blue-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/school/gangamaiengg/" className="text-white hover:text-blue-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/gangamaiengineeringcollege/" className="text-white hover:text-blue-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-blue-200 hover:text-white">Home</a></li>
              <li><a href="https://gangamaiengg.org.in/about" className="text-blue-200 hover:text-white">About</a></li>
              <li><a href="https://gangamaiengg.org.in/academics" className="text-blue-200 hover:text-white">Academics</a></li>
              <li><a href="https://gangamaiengg.org.in/placements" className="text-blue-200 hover:text-white">Placements</a></li>
              <li><a href="https://gangamaiengg.org.in/student-corner" className="text-blue-200 hover:text-white">Student Corner</a></li>
              <li><a href="https://gangamaiengg.org.in/contact" className="text-blue-200 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                <span className="text-blue-200">Plot No. 6, Knowledge Park I, Greater Noida, Uttar Pradesh - 201306</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span className="text-blue-200">+91 0120-2657095, 2657096</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span className="text-blue-200">info@gangamaiengg.org.in</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-blue-200 mb-4">
              Subscribe to our newsletter for updates and news.
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
          <p>&copy; {new Date().getFullYear()} Ganga Mai Engineering College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
