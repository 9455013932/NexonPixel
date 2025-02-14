import { FaMapMarkerAlt, FaPhone, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "../assets/whitelogo.png"
import { Link } from "react-router-dom";


const InfoSection = () => {
  return (
    <section className="bg-[#091D3E] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center justify-between p-4">
            <div className="w-full md:w-1/4">
              <a href="index.html">
                <img src={logo} alt="Logo" className="w-14" />
              </a>
            </div>
            <div className="w-full md:w-1/2 flex justify-center space-x-8">
              <a href="#" className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-xl" />
                <span>K Block, Khidwai Nagar,<br />Kanpur</span>
              </a>
              <a href="#" className="flex items-center space-x-2">
                <FaPhone className="text-xl" />
                <span>+91 9455013932</span>
              </a>
            </div>
            <div className="w-full md:w-1/4 flex justify-end space-x-4">
              <a  href={"https://www.facebook.com/profile.php?id=61572741636414"} target="_blank"  className="text-white text-2xl hover:text-gray-300"><FaFacebook /></a>
              <a href="" className="text-white text-2xl hover:text-gray-300"><FaTwitter /></a>
              <a href={"https://www.linkedin.com/in/nexon-pixel-45255a349/"} target="_blank" className="text-white text-2xl hover:text-gray-300"><FaLinkedin /></a>
              <a href={"https://www.instagram.com/nexonpixel659/?hl=en"} target="_blank" className="text-white text-2xl hover:text-gray-300"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* About Section */}
          <div>
            <h5 className="uppercase font-bold mb-4">NexonPixel</h5>
            <p className="text-justify">
              At NEXONPIXEL, we provide premium web Services , Products, On Demand Cutom Services , and more. Our team of experts is dedicated to delivering high-quality solutions that meet the unique needs
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="uppercase font-bold mb-4">Newsletter</h5>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="w-full h-12 px-4 bg-gray-200 text-gray-900 outline-none"
              />
              <button
                type="submit"
                className="px-8 py-2 bg-[#1976D2] text-white rounded-md transition-all border border-[#1976D2] hover:bg-transparent hover:text-[#1976D2]"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Services */}
          <div>
            <h5 className="uppercase font-bold mb-4">Services</h5>
            <ul className="space-y-2">
              <li>Customer Service</li>
              <li>Bulk Supply Solutions</li>
              <li>Quality Assurance</li>
              <li>Custom Orders & Product Sourcing</li>
              <li>Customized Packaging Services</li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h5 className="uppercase font-bold mb-4">Useful Links</h5>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link to="/aboutus" className="hover:text-gray-300">About</Link></li>
              <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
              <li><Link to="/products" className="hover:text-gray-300">Products</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
