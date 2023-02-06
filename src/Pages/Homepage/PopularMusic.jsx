import React from "react";
import PopularScroller from "./PopularSlides";

const PopularMusic = () => {
  
  return (
    <div className="  items-center ml-[5rem] mt-[3rem]">
      <p className=" text-white font-bold text-[24px]">Popular in your area</p>

      <PopularScroller />

     </div>
  );
};

export default PopularMusic;
