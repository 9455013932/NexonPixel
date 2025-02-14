import React from "react";
import contact2 from "../assets/contactus2.jpg";

const Contact = () => {
  return (
    <>
<section className="bg-gray-100 py-12">
  <div className="container mx-auto px-4 md:flex items-center justify-center gap-12">
    {/* Image Section */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src={contact2}
        alt="Contact"
        className="w-full md:w-[80%] lg:w-[60%] h-auto object-cover"
      />
    </div>

    {/* Form Section */}
    <div className="w-full md:w-1/2 px-6">
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-lg mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">Get In Touch</h2>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <select className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>Select Service</option>
              <option>Service 1</option>
              <option>Service 2</option>
              <option>Service 3</option>
            </select>
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Message"
              className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 h-24"
            ></textarea>
          </div>
          <button className="w-full bg-[#0060FF] text-white py-3 rounded-md text-lg font-semibold hover:bg-transparent hover:text-[#0060FF] border border-[#0060FF] transition">
            SEND
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

        </>
  );
};

export default Contact;
