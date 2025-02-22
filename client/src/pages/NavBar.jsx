import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice"; // Importing logout action
import { FaFacebook, FaLinkedin, FaInstagram, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import logo2 from "../assets/logo2.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference for dropdown
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="bg-white bg-opacity-80 border-b border-black">
        {/* Top Header */}
        <div className="max-w-full mx-auto px-4 md:px-6 lg:px-8 py-4 flex justify-between items-center bg-[#091D3E]">
          {/* Contact Info */}
          <div className="flex flex-wrap space-x-6 text-white text-sm">
            <a href="#" className="flex items-center">
              <div className="bg-blue-500 w-8 h-8 flex justify-center items-center rounded-full">📞</div>
              <span className="ml-2">+91 9455013932</span>
            </a>
            <a href="#" className="flex items-center">
              <div className="bg-blue-500 w-8 h-8 flex justify-center items-center rounded-full">📧</div>
              <span className="ml-2">nexonpixel964@gmail.com</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="https://www.facebook.com/profile.php?id=61572741636414" target="_blank" className="text-blue-500 text-2xl hover:text-gray-300"><FaFacebook /></a>
            <a href="https://www.linkedin.com/in/nexon-pixel-45255a349/" target="_blank" className="text-blue-500 text-2xl hover:text-gray-300"><FaLinkedin /></a>
            <a href="https://www.instagram.com/nexonpixel659/?hl=en" target="_blank" className="text-blue-500 text-2xl hover:text-gray-300"><FaInstagram /></a>
            <a href="https://wa.me/919455013932?text=Hello%20Deepak,%20I%20want%20to%20contact%20you!" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-green-500 text-2xl hover:text-gray-300">
                <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="mx-auto px-2 md:px-4 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-900">Nexonpixel</a>
            <img src={logo2} className="h-10 ml-4" alt="Logo" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-lg uppercase text-gray-800 hover:text-[#0060FF]">Home</Link>
            <Link to="/aboutus" className="text-lg uppercase text-gray-800 hover:text-[#0060FF]">About</Link>
            <Link to="/products" className="text-lg uppercase text-gray-800 hover:text-[#0060FF]">Our Products</Link>
            <Link to="/services" className="text-lg uppercase text-gray-800 hover:text-[#0060FF]">Services</Link>
            <Link to="/contact" className="text-lg uppercase text-gray-800 hover:text-[#0060FF]">Contact</Link>

            {/* Show Avatar Dropdown if user is logged in, else show Login/Signup */}
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center text-lg uppercase text-gray-800 hover:text-[#0060FF] focus:outline-none"
                >
                  <FaUserCircle className="text-2xl mr-2" />
                  {/* {user.name} Show user name */}
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
                    <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile</Link>
                    <Link to="/setting" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Settings</Link>
                    <Link to="/purchased" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Purchased</Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-200"
                    >
                      <FaSignOutAlt className="inline mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login" className="text-lg uppercase text-gray-800 hover:text-[#0060FF]">Login</Link>
                <Link to="/signup" className="text-lg uppercase text-gray-800 hover:text-[#0060FF]">Signup</Link>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden flex flex-col space-y-1" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="block w-8 h-1 bg-gray-900"></span>
            <span className="block w-8 h-1 bg-gray-900"></span>
            <span className="block w-8 h-1 bg-gray-900"></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${menuOpen ? "block" : "hidden"}`}>
          <nav className="bg-white py-4 text-center">
            <Link to="/" className="block py-2 text-lg text-gray-800 hover:text-[#0060FF]">Home</Link>
            <Link to="/aboutus" className="block py-2 text-lg text-gray-800 hover:text-[#0060FF]">About</Link>
            <Link to="/products" className="block py-2 text-lg text-gray-800 hover:text-[#0060FF]">Our Products</Link>
            <Link to="/services" className="block py-2 text-lg text-gray-800 hover:text-[#0060FF]">Services</Link>
            <Link to="/contact" className="block py-2 text-lg text-gray-800 hover:text-[#0060FF]">Contact</Link>

            {!user ? (
              <>
                <Link to="/login" className="block py-2 text-lg text-gray-800 hover:text-[#0060FF]">Login</Link>
                <Link to="/signup" className="block py-2 text-lg text-gray-800 hover:text-[#0060FF]">Signup</Link>
              </>
            ) : null}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
