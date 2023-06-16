import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Header = ({ first: { photos }, ifExists }) => {
  return (
    <div className="max-h-[100vh] md:max-h-[120vh] z-0">
      <div>
        <Splide>
          {photos.map((val, i) => (
            <SplideSlide key={i}>
              <div className="">
                <img
                  src={val.img}
                  className={`object-cover w-[100%]    ${
                    ifExists ? "h-[100vh] md:h-[120vh]" : "h-[80vh] md:h-[70vh]"
                  }`}
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      {ifExists ? (
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className={`relative bottom-[300px] left-[20px] z-10 `}
        >
          <h1 className="text-white text-5xl md:text-4xl ">
            Your Home Away From Home
          </h1>
          <h2 className="text-slate-100 text-2xl">
            Boutique Inspired Living In The Heart Of The People
          </h2>
          <button className="rounded-full bg-transparent hover:bg-white hover:text-black border-[2px] border-inherit text-white px-5 py-2 mt-2">
            EXPLORE MORE
          </button>
        </motion.div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
