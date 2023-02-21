import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item , i) => (
      <div key={i}>
        <div className="w-[100%] h-[15rem] relative">
          <Skeleton height={240} />
        </div>
        <div className="p-4">
          <span>
            <Skeleton height={80} />
          </span>
        </div>
      </div>
    ));
};

export default Loading;
