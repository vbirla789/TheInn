import React from "react";

const Moon = ({ room: { content } }) => {
  return content.map((val, i) => (
    <div
      key={i}
      className={`flex md:flex-col  gap-5 ml-10 mr-5 mb-10 ${
        val.reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div>
        <h1 className="text-3xl mb-[30px]">{val.title}</h1>
        <p className="mb-[10px] text-lg">{val.desc}</p>
        <button className="text-white text-lg mt-10 md:ml-[30vh] bg-[#3e352c] p-4 w-[30vh] rounded ">
          BOOK NOW
        </button>
      </div>
      <div>
        <img src={val.img} className=" w-[150vh] h-[60vh]" />
      </div>
    </div>
  ));
};

export default Moon;
