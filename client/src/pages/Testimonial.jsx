import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import t1 from "../assets/t1.jpg"
import t2 from "../assets/t2.jpg"
import t3 from "../assets/t3.jpg"

const testimonials = [
  {
    name: "John Mark",
    feedback:
      "I needed a professional business card for my brand, and they delivered beyond my expectations! The design was sleek, modern, and perfectly aligned with my brand identity. Highly recommended!",
    image: t1,
  },
  {
    name: "Emma Johnson",
    feedback:
      "Their SEO services helped my website rank higher in search results, and I started getting more organic traffic. Within a few months, my business saw a significant increase in leads. Truly outstanding service!",
    image: t2,
  },
  {
    name: "David Smith",
    feedback:
      "The team did an amazing job developing my business website. It's fast, responsive, and visually appealing. My customers love the new interface, and I couldn't be happier!",
    image: t3,
  },
  {
    name: "Sophia Carter",
    feedback:
      "Launching my eCommerce store was a breeze with their help! They built a seamless, user-friendly website that makes managing my online store so much easier. Thank you for the excellent work!",
    image: t1,
  },
  {
    name: "Michael Brown",
    feedback:
      "Professional, efficient, and creative! I got a fully customized website for my company that stands out. Their expertise in web development truly made a difference for my brand. Will definitely work with them again!",
    image: t2,
  },
];


const Testimonial = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Testimonial</h2>
        <hr className="w-16 border-2 border-teal-500 mx-auto my-4" />

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={2}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          className="mt-10 mb-15"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-lg">
                <div className="flex justify-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full border-2 border-teal-500"
                  />
                </div>
                <h5 className="text-xl font-semibold mt-4">{testimonial.name}</h5>
                <p className="text-gray-600 mt-2">{testimonial.feedback}</p>
                <span className="text-teal-500 text-4xl">
                  <i className="fa fa-quote-left"></i>
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
