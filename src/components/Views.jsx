import React from "react";
import { AiFillStar } from "react-icons/ai";

const Views = ({ name, img, time, review }) => {
  return (
    <div className="bg-white rounded p-5 h-[50vh] w-[40vh]  pb-[10px] mb-[10px] drop-shadow-md hover:drop-shadow-xl">
      <div className="">
        <div className="flex gap-5 mb-3">
          <div>
            <img src={img} className="h-14 w-14 rounded-full" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-[#427fed] font-semibold">{name}</h1>
            <p className="text-[#999]">{time}</p>
          </div>
        </div>
        <div>
          <span className="flex  my-1 text-[#ff6900]">
            <AiFillStar className="" />
            <AiFillStar className="" />
            <AiFillStar className="" />
            <AiFillStar className="" />
            <AiFillStar className="" />
          </span>
          <p className="max-w-[250px] mt-5">{review}</p>
        </div>
      </div>
    </div>
  );
};

export default Views;
