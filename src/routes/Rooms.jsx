import React from "react";
import Navbar from "../components/Navbar";
import Top from "../utils/Top";
import Moon from "../utils/Moon";
import { footerAPI, room } from "../data/data";
import Footer from "../components/Footer";

const Rooms = () => {
  return (
    <div className="bg-[#ece4dc] mt-0 min-h-[200vh]">
      <Navbar />
      <Top />
      <Moon room={room} />
      <Footer footerApi={footerAPI} />
    </div>
  );
};

export default Rooms;
