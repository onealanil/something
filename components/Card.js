import React from "react";
import Image from "next/legacy/image";

const Card = ({ props }) => {
  return (
    <>
      <div className="hover:text-green cursor-pointer select-none">
        <div className="w-[100%] h-[15rem] relative">
          <Image
            src={props.src}
            alt="card-image"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="p-4">
          <span className="font-hotTopicsFont leading-relaxed tracking-wide">
            {props.data}
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
