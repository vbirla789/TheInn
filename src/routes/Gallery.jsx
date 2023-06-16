import React from "react";
import Navbar from "../components/Navbar";
import Photos from "../utils/Photos";
import { footerAPI, pics } from "../data/data";
import Footer from "../components/Footer";

const Gallery = () => {
  return (
    <div className="bg-[#ece4dc] min-h-[200vh]">
      <Navbar />
      <Photos pics={pics} />
      <Footer footerApi={footerAPI} />
    </div>
  );
};

export default Gallery;
