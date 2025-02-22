import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import slide1 from "../assets/services/chatbot.jpg";
import slide2 from "../assets/services/seo.jpg";
import slide3 from "../assets/services/ai.jpg";
import slide4 from "../assets/services/socialmedia.jpg";
import { Link } from "react-router-dom";

const SliderComponent = () => {
  const slides = [
    {
      image: slide1,
      title: "AI-Powered Chatbots",
      description:
        "Enhance customer engagement with intelligent chatbots that provide instant, automated responses and improve user experience.",
    },
    {
      image: slide2,
      title: "SEO Optimization Services",
      description:
        "Boost your website’s visibility with expert SEO strategies, improving rankings, organic traffic, and online presence.",
    },
    {
      image: slide3,
      title: "Artificial Intelligence Solutions",
      description:
        "Leverage cutting-edge AI technology to automate processes, analyze data, and enhance decision-making in your business.",
    },
    {
      image: slide4,
      title: "Social Media Marketing",
      description:
        "Maximize your brand's reach with targeted social media campaigns, engaging content, and audience-driven strategies.",
    },
  ];

  return (
    <section className="flex items-center justify-center bg-gray-100">
      <Swiper
        modules={[Navigation, Autoplay]}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        loop={true}
        className="relative w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative flex flex-col items-center justify-center text-center w-full h-[250px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              <div className="relative z-10 px-4 md:px-6">
                <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold text-white mb-2 md:mb-4">
                  {slide.title}
                </h1>
                <p className="text-xs md:text-sm lg:text-base text-white mb-4 md:mb-6">
                  {slide.description}
                </p>
                <Link
                  to="/contact"
                  className="px-4 py-1 md:px-6 md:py-2 text-xs md:text-sm lg:text-base text-white bg-[#1976D2] hover:bg-transparent hover:text-[#1976D2] border border-[#1976D2] transition rounded-md"
                >
                  Contact Us
                </Link>

              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 cursor-pointer swiper-button-prev">
          <FaArrowLeft size={25} />
        </div>
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 cursor-pointer swiper-button-next">
          <FaArrowRight size={25} />
        </div>
      </Swiper>
    </section>
  );
};

export default SliderComponent;
