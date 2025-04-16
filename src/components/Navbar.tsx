
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md py-3 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://gangamaiengg.org.in/assets/images/home/logo.png" 
              alt="Ganga Mai Engineering College Logo" 
              className="h-16 mr-4" 
            />
            <div className="flex flex-col justify-center">
              <h1 className="text-xl md:text-2xl font-bold text-blue-900">Ganga Mai Engineering College</h1>
              <p className="text-xs md:text-sm text-gray-600">Excellence in Education</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-6">
            <a href="/" className="px-3 py-2 text-blue-900 font-medium hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors">Home</a>
            <a href="#about" className="px-3 py-2 text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors">About</a>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-600 hover:text-blue-700 bg-transparent hover:bg-blue-50">Academics</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-700/50 to-blue-700 p-6 no-underline outline-none focus:shadow-md"
                            href="#"
                          >
                            <div className="mt-4 mb-2 text-lg font-medium text-white">
                              Programs
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Discover our wide range of undergraduate and postgraduate programs
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="https://gangamaiengg.org.in/courses/btech" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">B.Tech</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Bachelor of Technology Programs
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="https://gangamaiengg.org.in/courses/mtech" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">M.Tech</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Master of Technology Programs
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-600 hover:text-blue-700 bg-transparent hover:bg-blue-50">Placements</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-700/50 to-blue-700 p-6 no-underline outline-none focus:shadow-md"
                            href="#placements"
                          >
                            <div className="mt-4 mb-2 text-lg font-medium text-white">
                              Placement Cell
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Our dedicated placement cell works to secure the best opportunities for our students
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="#placements" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Placement Statistics</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Explore our placement records and statistics
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="#placements" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Recruiters</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Top companies that recruit from our campus
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <a href="#students" className="px-3 py-2 text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors">Student Corner</a>
            <a href="#contact" className="px-3 py-2 text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 focus:outline-none p-2 hover:bg-gray-100 rounded-md">
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
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-gray-200 pt-3">
            <a href="/" className="block px-4 py-2 text-blue-900 font-medium hover:text-blue-700 hover:bg-blue-50 rounded-md">Home</a>
            <a href="#about" className="block px-4 py-2 text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-md">About</a>
            <div className="block text-gray-600">
              <button className="flex items-center w-full px-4 py-2 hover:text-blue-700 hover:bg-blue-50 rounded-md" onClick={() => {}}>
                Academics
              </button>
              <div className="pl-8 mt-1 space-y-1">
                <a href="https://gangamaiengg.org.in/courses/btech" className="block px-4 py-2 text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-md">B.Tech</a>
                <a href="https://gangamaiengg.org.in/courses/mtech" className="block px-4 py-2 text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-md">M.Tech</a>
              </div>
            </div>
            <div className="block text-gray-600">
              <button className="flex items-center w-full px-4 py-2 hover:text-blue-700 hover:bg-blue-50 rounded-md" onClick={() => {}}>
                Placements
              </button>
              <div className="pl-8 mt-1 space-y-1">
                <a href="#placements" className="block px-4 py-2 text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-md">Placement Statistics</a>
                <a href="#placements" className="block px-4 py-2 text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-md">Recruiters</a>
              </div>
            </div>
            <a href="#students" className="block px-4 py-2 text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-md">Student Corner</a>
            <a href="#contact" className="block px-4 py-2 text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-md">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
