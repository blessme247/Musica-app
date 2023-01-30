import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import likeIcon from "../../assets/icons/like.svg";

const Chart = () => {
    const {charts} = useSelector((state) => state.chartsStore);

  return (
    <Link to="/playlist/"> 
    <div className="bg-[#1a1e1f] flex justify-between items-center rounded-[20px] p-3 mt-3 cursor-pointer transition duration-150 ease-in-out  hover:scale-105">
      <img
        src={chartCoverImage}
        className="rounded-[10px] h-50px] w-[70px] object-cover object-center"
        alt="artiste"
      />

      <div className="text-white">
        <p className="text-[17px] font-medium">{chartTitle}</p>
        <p className="text-[12px]">{chartDescription}</p>
        <p className="text-[12px]">{chartDuration}</p>
      </div>

      <img src={likeIcon} alt="heart icon" />
    </div>
    </Link>
  );
};

export default Chart;
