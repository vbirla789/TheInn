import React from "react";

const Photos = ({ pics: { photos } }) => {
  return (
    <div>
      <div className="flex flex-wrap -mx-4 pt-[20vh] px-20 mb-10">
        {photos.map((photo, index) => (
          <div key={index} className=" w-1/3 px-1 py-1 ">
            <img
              src={photo.img}
              alt={`Photo ${index + 1}`}
              className="w-[80vh] h-[60vh]  "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
