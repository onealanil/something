import React, { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/legacy/image";
// import { Fade } from "react-awesome-reveal";

const Card = ({ props }) => {
  return (
    <>
      <div className="hover:text-green cursor-pointer select-none">
        <div className="w-[100%] h-[15rem] relative">
          <Suspense fallback={<Skeleton />}>
            <Image
              src={props.src}
              alt="card-image"
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-cover"
            />
          </Suspense>
        </div>
        <div className="p-4">
          <span className="font-hotTopicsFont leading-relaxed tracking-wide">
            {props.data || <Skeleton />}
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
