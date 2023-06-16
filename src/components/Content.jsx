import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Content = ({ sec: { photos, title, desc, img } }) => {
  return (
    <div className="md:min-h-[130vh] min-h-[100vh] flex  sm:flex-col md:flex-col  bg-[#ece4dc]">
      <div>
        <div className="flex flex-col">
          {photos.map((val, i) => (
            <div key={i}>
              <div>
                <img
                  src={val.img1}
                  className="absolute top-[110vh] left-[10vh] z-20 w-[75vh] h-[40vh] md:top-[130vh]"
                />
              </div>
              <div>
                <img
                  src={val.img2}
                  className="absolute rotate-90 left-[40vh] top-[130vh] w-[70vh] z-0 md:top-[150vh]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-[110vh] top-[135vh] md:top-[215vh] md:left-0 md:ml-[20px]">
        <h1 className="text-6xl text-[#3e352c] ">{title}</h1>
        <p className="mt-[20px]">{desc}</p>
      </div>
    </div>
  );
};

export default Content;
