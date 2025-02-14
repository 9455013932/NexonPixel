import React from "react";
import ar from "../assets/ar.jpg";
import ar2 from "../assets/ar2.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="font-[Roboto_Condensed] p-4 text-[#091D3E]">
        {/* First Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="p-4 md:p-24 text-center md:text-left">
            <h1 className="text-[#005AF9] text-lg font-bold">Why US ?</h1>
            <h1 className="font-[Roboto_Condensed] font-bold text-3xl md:text-5xl mb-3">
              Why Choose Us for Website Development?
            </h1>
            <p className="text-md">
              In the ever-evolving digital landscape, your website serves as the face of your brand. Our web design company takes this seriously, tailoring our services to meet your unique business objectives.
            </p>
            <div className="ml-0 md:ml-8">
              <h3 className="font-bold text-xl md:text-2xl mt-5">
                HIGH TECH EXPERTISE
              </h3>
              <p>
                As a trusted web design partner, we understand that your website is more than just an online presence; it's a powerful tool for driving growth and engagement.
              </p>
            </div>
          </div>

          {/* ✅ First Image - Always Visible */}
          <div className="flex justify-center items-center">
            <img src={ar2} alt="Logo" className="w-2/3 md:w-auto h-92" />
          </div>
        </div>

        {/* Second Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
          {/* ✅ Second Image - Hidden on small screens, Visible on large screens */}
          <div className="hidden md:flex justify-center items-center">
            <img src={ar} alt="Logo" className="w-2/3 md:w-auto h-88" />
          </div>

          <div className="p-4 md:pr-24 md:mr-12 text-center md:text-left">
            <h1 className="text-[#005AF9] text-lg font-bold">About US</h1>
            <h1 className="font-[Roboto_Condensed] font-bold text-3xl md:text-5xl mb-3">
              Leading Web Design Company: Enhance Your Online Presence
            </h1>
            <p className="text-md">
              We are more than just a web design company; we are your dedicated
              partner in digital success.
            </p>
            <div className="flex flex-col md:flex-row justify-center md:justify-start gap-8 mt-4">
              <div>
                <strong className="text-[#005AF9] text-4xl">7Y</strong> +
                <div>Experiences</div>
              </div>
              <div>
                <strong className="text-[#005AF9] text-4xl">500</strong>+
                <div>Client</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default AboutUs;
