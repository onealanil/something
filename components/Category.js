import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";

const Category = ({ props }) => {
  return (
    <>
      <Link href={`/category/${props.link}`}>
        <div className="text-white hover:text-green cursor-pointer select-none ">
          <div className="w-[100%] h-[20rem] relative rounded-md">
            <Image
              src={props.src}
              alt="card-image"
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute bottom-0 w-full h-24 bg-opacity-70 bg-black">
              <div className="flex items-start gap-y-2 justify-center flex-col ml-6">
                <span className="font-frontTitleFont text-[1.75rem] font-bold leading-relaxed tracking-wide">
                  {props.title}
                </span>
                <span className="font-hotTopicsFont">{props.content}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Category;
