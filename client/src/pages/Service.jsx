import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  {
    title: "Quality Assurance",
    description:
      "Quality is the underlying foundation of everything we do...",
    icon: "https://cdn-icons-png.flaticon.com/128/1903/1903162.png",
  },
  {
    title: "Custom Orders & Product Sourcing",
    description:
      "Need something specific? We offer personalized sourcing services...",
    icon: "https://cdn-icons-png.flaticon.com/128/2098/2098408.png",
  },
  {
    title: "Customized Packaging Services",
    description:
      "At USKY we offer flexible, customizable packaging...",
    icon: "https://cdn-icons-png.flaticon.com/128/3514/3514491.png",
  },
  {
    title: "Global Shipping Solutions",
    description:
      "Reliable and efficient shipping solutions tailored for your business...",
    icon: "https://cdn-icons-png.flaticon.com/128/3514/3514491.png",
  },
];

const Service = () => {
  return (
    <section className="service_section py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
          Our Services
        </h2>
        <p className="text-md md:text-lg px-4 md:px-12 text-gray-600">
          At USKY, we take pride in delivering high-quality vanilla beans, and sawn timber while ensuring seamless business solutions tailored to your needs.
        </p>

        <div className="px-6 md:px-12 lg:px-20">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            loop={true}
            breakpoints={{
              1024: { slidesPerView: 3, spaceBetween: 28 }, // Large screens (3 slides)
              768: { slidesPerView: 2, spaceBetween: 20 },  // Tablets (2 slides)
              0: { slidesPerView: 1, spaceBetween: 15 },    // Mobile (1 slide)
            }}
            className="mt-10"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="box bg-white shadow-lg p-6 rounded-lg text-center max-w-sm transition-transform transform scale-95 hover:scale-105">
                  <div className="img-box flex justify-center">
                    <img src={service.icon} alt="service icon" className="w-16 h-16" />
                  </div>
                  <div className="detail-box mt-4">
                    <h5 className="text-xl font-semibold">{service.title}</h5>
                    <p className="text-gray-600 mt-2">{service.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="btn-box mt-8">
          <a
            href="#"
            className="px-6 py-3 bg-[#1976D2] text-white rounded-md hover:bg-transparent hover:text-[#1976D2] border border-[#1976D2] transition"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Service;
