import React, { useState } from "react";
import nav_img from "../Images/favicon.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full h-[64px] z-50 
       border-[#3f3d3d] rounded-b-[10px] 
      shadow-lg shadow-black/40 
      bg-[#1a1a1a]/30 backdrop-blur-md"
    >
      <div className="w-[90%] mx-auto h-full flex items-center justify-between">
        <div className="md:w-[45%] flex items-center">
          <div className="pt-0 pl-0 md:pt-3 md:pl-4">
            <img
              src={nav_img}
              alt="Logo"
              className="h-[40px] w-[40px] md:h-[64px] md:w-[64px] ml-0 xl:ml-[61px]"
            />
          </div>
        </div>

        <div className="md:w-[45%] flex items-center justify-end">
          {/* Desktop menu */}
          <ul className="hidden md:flex justify-around mt-[1px] xl:mr-[60px] mr-0 text-[#999999] text-[14px] font-medium w-[66.3%]">
            <li>
              <a href="#home" className="block hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="block hover:text-white transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="block hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden ml-2 p-2 focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              /* X icon */
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              /* Hamburger */
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="md:hidden absolute w-[100%] top-[64px] z-40">
          <div className="w-[100%] border-[#3f3d3d] shadow-lg shadow-black/40 bg-[#1a1a1a]/95 text-[#999999] flex flex-col items-center py-4 space-y-4">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2 hover:text-white transition"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2 hover:text-white transition"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2 hover:text-white transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2 hover:text-white transition"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
