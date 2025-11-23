import React from "react";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoLogoTiktok } from "react-icons/io5";
import logo from "../../assets/ats.png"
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-700">
    
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo + Contact */}
        <div>
          <img
            src={logo}
            alt="Logo"
            className="w-40 mb-4 rounded-lg hover:scale-105 transition-transform"
          />
          <p className="font-semibold text-lg">Mr. Vijay Kandel</p>
          <p className="text-sm text-gray-500">Handling Officer</p>
          <a
            href="tel:9749972314"
            className="text-blue-600 font-medium block mt-2"
          >
            974-9972314
          </a>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">Features</a></li>
            <li><a href="#" className="hover:text-blue-600">FAQ</a></li>
            <li><a href="#" className="hover:text-blue-600">About Us</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600">Privacy & Policy</a></li>
            <li><a href="#" className="hover:text-blue-600">Terms & Condition</a></li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Links</h3>
          <div className="flex space-x-3">
            <Link 
              to="https://www.instagram.com/atsnepal/?hl=en" target="_blank"
              className="p-2 rounded-full border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition"
            >
              <GrInstagram size={18} />
            </Link>

            <Link
              to="https://www.facebook.com/p/ATS-NEPAL-100093605031358/" target="_blank"
              className="p-2 rounded-full border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition"
            >
              <FaFacebook size={18} />
            </Link>

            <Link
            to="https://www.tiktok.com/@atsnepal" target="_blank"
              className="p-2 rounded-full border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition"
            >
              <IoLogoTiktok size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 py-4 text-center text-sm text-gray-600">
        © Copyright 2025 At Your Service. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
