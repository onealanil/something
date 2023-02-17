import React from "react";
import Card from "./Card";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const HotPost = () => {
  const data = [
    {
      id: 1,
      src: "/images/card1.jpg",
      data: "Nepal has been witnessing a steady growth in the online market over the past few years, with more and more people.",
    },
    {
      id: 2,
      src: "/images/card2.jpg",
      data: "While saving money in a bank account is a common and safe way to grow your savings, there are certain reasons....",
    },
    {
      id: 3,
      src: "/images/card3.jpg",
      data: "Making money with debt can be a risky strategy, but it can also be an effective way to generate returns if it's done in a good manner.",
    },
  ];
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="w-[90%] flex flex-col items-center justify-center">
          <div className="flex text-[2rem] md:text-[3rem] font-bold leading-relaxed tracking-wide gap-x-2">
            <Fade>
              <span className="font-sideFont">Hot </span>
              <span className="font-sideFont text-green">Topics</span>
            </Fade>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 my-4">
            {data.map((val) => {
              return <Card key={val.id} props={val} />;
            })}
          </div>
          <Link href="/allblog">
            <div className="flex gap-x-4 my-5 items-center justify-center hover:text-green cursor-pointer pb-4">
              <span className="font-hotTopicsFont font-bold">View More</span>
              <i>
                <BsArrowRight />
              </i>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <hr className="h-[2px] my-5 border-solid w-[90%] font-bold bg-gray-600"></hr>
      </div>
    </>
  );
};

export default HotPost;
