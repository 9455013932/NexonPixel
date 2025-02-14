import React from "react";
import Navbar from "../NavBar";
import InfoSection from "../InfoSection";


const FrontendLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <InfoSection />
    </>
  );
};

export default FrontendLayout;
