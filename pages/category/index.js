import React from "react";
import Category from "../../components/Category";
import { FaBorderAll } from "react-icons/fa";

const category = () => {
  const data = [
    {
      id: 1,
      src: "/images/category1.png",
      title: "Micro Finance",
      content: "learn about micro financing",
      link: "microfinance",
    },
    {
      id: 2,
      src: "/images/retirementplan.png",
      title: "Retirement Plan",
      content: "make a perfect retirement plan",
      link: "retirementplan",
    },
    {
      id: 3,
      src: "/images/investing101.png",
      title: "Investing 101",
      content: "save, invest and secure your future",
      link: "investing101",
    },
    {
      id: 4,
      src: "/images/IPO.png",
      title: "IPO & Share Market",
      content: "save, invest and secure your future",
      link: "ipo&sharemarket",
    },
    {
      id: 5,
      src: "/images/realestate.png",
      title: "Real Estate",
      content: "save, invest and secure your future",
      link: "realestate",
    },
    {
      id: 6,
      src: "/images/bitcoin.png",
      title: "Cryptocurrency",
      content: "save, invest and secure your future",
      link: "cryptocurrency",
    },
    {
      id: 7,
      src: "/images/tax.png",
      title: "Tax Planning",
      content: "save, invest and secure your future",
      link: "taxplanning",
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
              <FaBorderAll
                size={70}
                className="text-green hover:text-gray-500 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default category;
