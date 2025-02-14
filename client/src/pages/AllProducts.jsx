import React, { useState } from "react";
import ar from "../assets/ar.jpg";
import ar2 from "../assets/ar2.jpg";
import ar3 from "../assets/ar3.jpg";
import ar4 from "../assets/ar4.png";
import ar5 from "../assets/ar5.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";


const AllProducts = () => {
  const [selectedPackage, setSelectedPackage] = useState("basic");
  const images = [  ar3, ar4,ar5,ar,ar2,];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const packages = {
    basic: {
      title: "BASIC ",
      price: "₹5,525",
      details: "Add a 3D Model, one Video, one Photo, and custom data on a card.",
      delivery: "5-day delivery",
      revisions: "2 Revisions",
    },
    standard: {
      title: "STANDARD ",
      price: "₹8,999",
      details: "Includes 3D Model, multiple videos, multiple photos, and enhanced features.",
      delivery: "4-day delivery",
      revisions: "3 Revisions",
    },
    premium: {
      title: "PREMIUM ",
      price: "₹12,499",
      details: "Everything in Standard plus advanced animations and additional interactive elements.",
      delivery: "3-day delivery",
      revisions: "Unlimited Revisions",
    },
  };
  return (
    <>
      <div className="font-[Roboto_Condensed] p-4 text-[#091D3E]  ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12 ">
          {/* ✅ Second Image - Hidden on small screens, Visible on large screens */}
          <div className=" justify-center items-center p-4 ">
            <div className="flex flex-col justify-center items-center w-full">
              {/* ✅ Main Swiper - Large Image Display */}
              <Swiper
                spaceBetween={10}
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
                className="w-full md:w-[500px] h-[350px]"
              >
                <SwiperSlide>
                  <img
                    src={selectedImage}
                    alt="Main"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              </Swiper>

              {/* ✅ Thumbnail Gallery */}
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={5}
                freeMode
                watchSlidesProgress
                className="w-full mt-4"
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index} onClick={() => setSelectedImage(img)}>
                    <img
                      src={img}
                      alt={`Thumbnail ${index}`}
                      className="cursor-pointer w-full h-24 object-cover border-2 border-transparent hover:border-blue-500"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>


            <div>
              {/* 🔹 Comparison Table */}
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-center text-[#005AF9]">Package Comparison</h2>
                <div className="overflow-x-auto mt-6">
                  <table className="min-w-full border border-gray-300 text-center">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2">Features</th>
                        {Object.keys(packages).map((key) => (
                          <th key={key} className="border border-gray-300 px-4 py-2">{packages[key].title}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Price</td>
                        {Object.keys(packages).map((key) => (
                          <td key={key} className="border border-gray-300 px-4 py-2">{packages[key].price}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Delivery Time</td>
                        {Object.keys(packages).map((key) => (
                          <td key={key} className="border border-gray-300 px-4 py-2">{packages[key].delivery}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Revisions</td>
                        {Object.keys(packages).map((key) => (
                          <td key={key} className="border border-gray-300 px-4 py-2">{packages[key].revisions}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Details</td>
                        {Object.keys(packages).map((key) => (
                          <td key={key} className="border border-gray-300 px-4 py-2">{packages[key].details}</td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:pr-24 md:mr-12 text-center md:text-left md:sticky top-0 h-full  overflow-y-auto">
            <h1 className="text-[#005AF9] text-lg font-bold">Business Card</h1>
            <h1 className="font-[Roboto_Condensed] font-bold text-3xl md:text-5xl mb-3">
            Beyond Paper – The Ultimate AR Business Card Solution !" 
            </h1>
            <p className="text-md">P
              We are more than just a web design company; we are your dedicated
              partner in digital success.
            </p>
            <div className="flex w-full mt-4">
              {Object.keys(packages).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedPackage(key)}
                  className={`w-full  py-2 text-left px-4 border  ${selectedPackage === key ? "bg-gray-200 text-black border border-b-3" : "bg-white "
                    }`}
                >
                  {packages[key].title}
                </button>
              ))}
            </div>
            <div className="p-4 border  ">
              <h3 className="text-xl font-semibold">{packages[selectedPackage].title}</h3>
              <p className="text-gray-700">{packages[selectedPackage].details}</p>
              <p className="font-semibold mt-2">{packages[selectedPackage].price}</p>
              <p className="text-sm text-gray-600">{packages[selectedPackage].delivery}</p>
              <p className="text-sm text-gray-600">{packages[selectedPackage].revisions}</p>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md">Continue</button>
            </div>
           
          </div>
        </div>




        <div className="bg-gray-100 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* 🔹 Main Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#091D3E]">
          Elevate Your Business with <br /> AR Business Card Services!
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Impress clients, stand out, and boost engagement with our innovative
          AR-powered business cards.
        </p>
      </div>

      {/* 🔹 Features Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold text-[#091D3E]">🚀 Stand Out</h3>
          <p className="text-gray-600 mt-2">
            Turn a simple card into a dynamic, interactive experience.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold text-[#091D3E]">📈 Boost Conversions</h3>
          <p className="text-gray-600 mt-2">
            Increase engagement by 70% with interactive AR features.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold text-[#091D3E]">💼 Impress Clients</h3>
          <p className="text-gray-600 mt-2">
            Showcase videos, animations, and direct links to your business.
          </p>
        </div>
      </div>

      {/* 🔹 Stats Section */}
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-12">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-[#005AF9]">1,500+</h2>
          <p className="text-lg text-gray-700">Happy Customers</p>
        </div>
        <div className="text-center">
          <h2 className="text-5xl font-bold text-[#005AF9]">70%</h2>
          <p className="text-lg text-gray-700">Higher Engagement</p>
        </div>
        <div className="text-center">
          <h2 className="text-5xl font-bold text-[#005AF9]">100%</h2>
          <p className="text-lg text-gray-700">Satisfaction Guarantee</p>
        </div>
      </div>

      {/* 🔹 Call to Action */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-[#091D3E]">
          Ready to Elevate Your Business?
        </h2>
        <p className="text-lg text-gray-700 mt-2">
          Let’s make your business cards smarter and unforgettable!
        </p>
        <button className="mt-6 px-6 py-3 hover:text-white text-[#005AF9] border border-[#005AF9] text-lg font-semibold rounded-md shadow-md hover:bg-[#06122D] transition">
          Get Started Today
        </button>
      </div>
    </div>
      </div>

    </>
  )
}

export default AllProducts
