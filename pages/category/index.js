import React from "react";
import Category from "../../components/Category";
import { BsFillPlusCircleFill } from "react-icons/bs";


const category = () => {
  const data = [
    {
      id: 1,
      src: "/images/category1.png",
      title: "Micro Finance",
      content: "learn about micro financing",
    },
    {
      id: 2,
      src: "/images/retirementplan.png",
      title: "Retirement Plan",
      content: "make a perfect retirement plan",
    },
    {
      id: 3,
      src: "/images/investing101.png",
      title: "Investing 101",
      content: "save, invest and secure your future",
    },
    {
      id: 3,
      src: "/images/IPO.png",
      title: "IPO & Share Market",
      content: "save, invest and secure your future",
    },
    {
      id: 3,
      src: "/images/realestate.png",
      title: "Real Estate",
      content: "save, invest and secure your future",
    },
    {
      id: 3,
      src: "/images/bitcoin.png",
      title: "Cryptocurrency",
      content: "save, invest and secure your future",
    },
    {
      id: 3,
      src: "/images/tax.png",
      title: "Tax Planning",
      content: "save, invest and secure your future",
    },
  ];
  return (
    <>
      <div className="mt-16 w-full flex items-center justify-center">
        <div className="w-[90%]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
            {data.map((val) => {
              return <Category key={val.id} props={val} />;
            })}
            <div className="flex items-center justify-center">
              <BsFillPlusCircleFill size={70} className="text-green hover:text-gray-500 cursor-pointer"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default category;
