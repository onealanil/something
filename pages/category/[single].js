import React from "react";
import { useRouter } from "next/router";
import Card from "../../components/Card";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";
import Link from "next/link";

const SingleCategory = () => {
  const router = useRouter();

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
    {
      id: 12,
      src: "/images/card1.jpg",
      data: "Nepal has been witnessing a steady growth in the online market over the past few years, with more and more people.",
    },
    {
      id: 22,
      src: "/images/card2.jpg",
      data: "While saving money in a bank account is a common and safe way to grow your savings, there are certain reasons....",
    },
    {
      id: 32,
      src: "/images/card3.jpg",
      data: "Making money with debt can be a risky strategy, but it can also be an effective way to generate returns if it's done in a good manner.",
    },
    {
      id: 13,
      src: "/images/card1.jpg",
      data: "Nepal has been witnessing a steady growth in the online market over the past few years, with more and more people.",
    },
    {
      id: 23,
      src: "/images/card2.jpg",
      data: "While saving money in a bank account is a common and safe way to grow your savings, there are certain reasons....",
    },
    {
      id: 33,
      src: "/images/card3.jpg",
      data: "Making money with debt can be a risky strategy, but it can also be an effective way to generate returns if it's done in a good manner.",
    },
  ];

  return (
    <>
      <div className="mt-16 mb-4 w-full flex items-center justify-center">
        <div className="w-[90%] xl:w-[85%] 2xl:w-[70%]">
          <div className="flex gap-x-1 pt-3">
            <span className="font-sideFont  text-[#CCCBCB]">
              <Link href="/allblog">
              <i className="cursor-pointer hover:text-green">
                <BiHomeAlt size={20} />
              </i>
              </Link>
            </span>
            <span className="font-sideFont text-green capitalize">
              {router.query.single}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 my-4">
            {data.map((val) => {
              return <Card key={val.id} props={val} />;
            })}
          </div>
          <div className="flex items-center justify-center">
            <BsFillPlusCircleFill
              size={70}
              className="text-green hover:text-gray-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCategory;
