import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // ✅ Correct import
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Add autoplay styles (optional)

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import slide1 from "../assets/services/chatbot.jpg";
import slide2 from "../assets/services/seo.jpg";
import slide3 from "../assets/services/ai.jpg";
import slide4 from "../assets/services/socialmedia.jpg";

const SliderComponent = () => {
  const slides = [
    { image: slide1, title: "AI-Powered Chatbots", description: "Enhance customer engagement with intelligent chatbots that provide instant, automated responses and improve user experience." },
    { image: slide2, title: "SEO Optimization Services", description: "Boost your website’s visibility with expert SEO strategies, improving rankings, organic traffic, and online presence." },
    { image: slide3, title: "Artificial Intelligence Solutions", description: "Leverage cutting-edge AI technology to automate processes, analyze data, and enhance decision-making in your business." },
    { image: slide4, title: "Social Media Marketing", description: "Maximize your brand's reach with targeted social media campaigns, engaging content, and audience-driven strategies." }
  ];

  return (
    <section className="flex items-center justify-center bg-gray-100">
      <Swiper
        modules={[Navigation, Autoplay]} // ✅ Include Autoplay correctly
        centeredSlides={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }} // ✅ Autoplay enabled
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        loop={true}
        className="relative w-full h-[500px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative flex flex-col items-center justify-center text-center w-full h-[500px] bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              <div className="relative z-10 px-6">
                <h1 className="text-3xl font-semibold text-white mb-4">
                  {slide.title}
                </h1>
                <p className="text-white mb-6">{slide.description}</p>
                <a
                  href="contact.html"
                  className="px-6 py-2 text-white bg-[#1976D2] hover:bg-transparent hover:text-[#1976D2] border border-[#1976D2] transition rounded-md"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 cursor-pointer swiper-button-prev">
          <FaArrowLeft size={30} />
        </div>
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 cursor-pointer swiper-button-next">
          <FaArrowRight size={30} />
        </div>
      </Swiper>
    </section>
  );
};

export default SliderComponent;
