"use client"
import React, { useState, useEffect } from "react";
import { FaHome, FaInfo, FaNewspaper, FaHandHoldingHeart, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 via-white to-red-600 text-transparent bg-clip-text">
            Palestine Unidos
          </h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <NavItem icon={<FaHome />} text="Home" />
          <NavItem icon={<FaInfo />} text="About" />
          <NavItem icon={<FaNewspaper />} text="News" />
          <NavItem icon={<FaHandHoldingHeart />} text="Support" />
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-100 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button className="bg-red-600 text-white rounded-full py-2 px-6 hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105">
            Donate
          </button>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-green-500 via-white to-red-500"></div>
    </header>
  );
};

const NavItem = ({ icon, text }) => (
  <a
    href="#"
    className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition duration-300 ease-in-out transform hover:scale-110"
  >
    {icon}
    <span>{text}</span>
  </a>
);

export default Navbar;
