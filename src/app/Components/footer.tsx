import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-600 via-white to-red-600 text-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <div className="flex items-center mb-2">
              <FaEnvelope className="mr-2" />
              <a href="mailto:info@palestineliberation.org" className="hover:text-green-800 transition duration-300">info@palestineliberation.org</a>
            </div>
            <div className="flex items-center mb-2">
              <FaPhone className="mr-2" />
              <a href="tel:+970123456789" className="hover:text-green-800 transition duration-300">+970 123 456 789</a>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <span>Palestine, Middle East</span>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center">
            <h3 className="text-3xl font-bold mb-4 text-black">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-red-600">
                Free Palestine
              </span>
            </h3>
            <p className="text-lg font-semibold italic">
              Unity in Diversity, Strength in Resilience
            </p>
          </div>
          <div className="w-full md:w-1/3 text-right">
            <img
              src="https://media.istockphoto.com/id/1445564999/vector/vector-illustration-of-flat-round-shaped-of-palestine-flag-official-national-flag-in-button.jpg?s=612x612&w=0&k=20&c=8kPmfB-vAMvTh40tovHJyWlShCAcwXmWVNaCr3_sHqQ="
              alt="Palestinian Flag"
              className="w-32 h-auto mx-auto md:ml-auto md:mr-0 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-black text-center">
          <p>&copy; {new Date().getFullYear()} Palestine Liberation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;