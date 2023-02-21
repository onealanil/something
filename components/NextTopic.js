import React from "react";
import Card from "./Card";
import { BsArrowRight } from "react-icons/bs";

const NextTopic = () => {
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
        <div className="w-[90%] xl:w-[85%] 2xl:w-[70%] flex flex-col items-center justify-center">
          <div className="flex text-[1rem] md:text-[2rem] font-bold leading-relaxed tracking-wide gap-x-2">
            <span className="font-sideFont">Read </span>
            <span className="font-sideFont text-green">Next</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 my-4">
            {data.map((val) => {
              return <Card key={val.id} props={val} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NextTopic;
