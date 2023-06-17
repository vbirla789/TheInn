import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Image = ({ third: { photos } }) => {
  const splideOptions = {
    perPage: 2,
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
    <div className="bg-[#ece4dc] min-h-[100vh]">
      <div>
        <h1 className="text-5xl text-[#3e352c] text-center py-8 mb-5 align-middle">
          Boutique Inspired Living
        </h1>
      </div>
      <div>
        <Splide options={splideOptions}>
          {photos.map((val, i) => (
            <SplideSlide key={i}>
              <img src={val.img} className="h-[70vh] w-[50vh] md:h-[62vh]" />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Image;
