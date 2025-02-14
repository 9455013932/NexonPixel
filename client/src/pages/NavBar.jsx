import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

import logo2 from "../assets/logo2.png"

const Navbar = () => {
  return (
    <>
    
    <header className="bg-white bg-opacity-80 border-b border-black">
      {/* Top Header */}
      <div className="container mx-auto py-4 flex justify-between items-center ml-2 bg-[#091D3E]">
        {/* Contact Navigation */}
        <div className="flex space-x-6">
          <a href="#" className="flex items-center text-black">
            <div className="bg-blue-500 w-9 h-9 flex justify-center items-center rounded-full">
              📞
            </div>
            <span className="ml-2 text-white">+91 9455013932</span>
          </a>
          <a href="#" className="flex items-center text-black">
            <div className="bg-blue-500 w-9 h-9 flex justify-center items-center rounded-full">
              📧
            </div>
            <span className="ml-2 text-white" >nexonpixel964@gmail.com</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 ">
          <a href={"https://www.facebook.com/profile.php?id=61572741636414"} target="_blank" className="text-blue-500 px-2 text-2xl hover:text-gray-300"><FaFacebook /></a>
          <a href="#" target="_blank" className="text-blue-500 px-2 text-2xl hover:text-gray-300"><FaTwitter /></a>
          <a href={"https://www.linkedin.com/in/nexon-pixel-45255a349/"} target="_blank" className="text-blue-500 px-2 text-2xl hover:text-gray-300"><FaLinkedin /></a>
          <a href={"https://www.instagram.com/nexonpixel659/?hl=en"} target="_blank" className="text-blue-500 pr-4 text-2xl mr-6 hover:text-gray-300"><FaInstagram /></a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div className="grid grid-cols-2 gap-2">
          <div> <a href="/" className="text-2xl font-bold text-gray-900 ml-4">
            Nexonpixel
          </a></div>
          <div><span className="text-teal-600"><img src={logo2} className="h-10 ml-4 " /></span></div>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-lg uppercase text-gray-800 hover:text-[#0060FF]">Home</Link>
          <Link to="/aboutus" className="text-lg uppercase text-gray-800 hover:text-[#0060FF]">About</Link>
          <Link to="/products" className="text-lg uppercase text-gray-800 hover:text-[#0060FF]">Our Products</Link>
          <Link to="/services" className="text-lg uppercase text-gray-800 hover:text-[#0060FF]">Services</Link>
          <Link to="/contact" className="text-lg uppercase text-gray-800 hover:text-[#0060FF] mr-6">Contact</Link>
        </nav>

        {/* Mobile Menu */}
        <button className="md:hidden text-gray-900">
          <span className="block w-8 h-1 bg-gray-900 mb-1"></span>
          <span className="block w-8 h-1 bg-gray-900 mb-1"></span>
          <span className="block w-8 h-1 bg-gray-900"></span>
        </button>
      </div>
    </header>
    </>
  );
};

export default Navbar;
