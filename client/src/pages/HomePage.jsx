import React from "react";
import SliderComponent from "./slider";
import Service from "./Service";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Product from "./Product";
import ProductProcess from "./ProductProcess";


  const HeroSection = () => {


    return (
      <>
      <SliderComponent/>
      <Service/>
      <Product/>  
      <ProductProcess/>
      <Contact/>
      <Testimonial/>
      </>
    );
  };

  export default HeroSection;
