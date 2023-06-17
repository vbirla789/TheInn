import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Views from "./Views";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Reviews = ({ fourth: { photo, content } }) => {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };
  return (
    <div className="min-h-[100vh] bg-[#ece4dc] flex flex-col">
      <div className="flex md:flex-col md:gap-10">
        <div className="flex my-auto mr-5">
          <div className="ml-[30px] mr-[20px] ">
            <img src={photo} className="h-14 w-14" />
          </div>
          <div className="">
            <h1 className="text-lg mb-[5px] font-semibold w-[250px]">
              The Inn, Shimla | Boutique Stay
            </h1>
            <div className="flex text-[#ff6900]">
              <p className="text-lg font-medium">5.0</p>
              <span className="flex ml-[10px] mt-1">
                <AiFillStar className="" />
                <AiFillStar className="" />
                <AiFillStar className="" />
                <AiFillStar className="" />
                <AiFillStar className="" />
              </span>
            </div>
            <p>Based on 32 reviews</p>

            <button className="bg-[#427fed] rounded-full px-5 py-2 mt-4 text-white flex drop-shadow-2xl">
              <p>review us on</p>
              <span>
                <FcGoogle className="ml-2 mt-1" />
              </span>
            </button>
          </div>
        </div>
        <div className="w-[100%]">
          <Splide options={splideOptions}>
            {content.map((val, i) => (
              <SplideSlide>
                <Views key={i} {...val} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
      <motion.div
        className="flex flex-col"
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <h1 className="text-6xl md:text-4xl text-[#3e352c]  m-auto md:ml-3 mt-20">
          WANT TO BOOK WITH US ?
        </h1>
        <button className="text-white text-lg my-10 bg-[#3e352c] p-4 w-[30vh] rounded m-auto">
          BOOK NOW
        </button>
      </motion.div>
    </div>
  );
};

export default Reviews;
