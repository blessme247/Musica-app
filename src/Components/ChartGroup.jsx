import React from 'react'
import { Link } from "react-router-dom";
import playIcon from "../assets/icons/play.svg";
import collectionIcon from "../assets/icons/collection.svg";
import redHeartIcon from "../assets/icons/redHeart.svg";

const ChartGroup = ({cover_image, duration, description, title, length, children}) => {
  return (
    <div className=" w-[100%] ml-[5.5rem] flex flex-col mt-[1.8rem]">
    <div className="flex gap-[2rem]  items-center ">
      <div className="w-[304px] h-[289px]">
        <img
          src={cover_image}
          className="rounded-[35.17px] w-[100%] h-[100%] object-cover object-center"
          alt="playlist cover art"
        />
      </div>
      <div className="flex w-[55%] flex-col ml-[2rem] mt-[1rem]">
        <p className="text-[35px] text-[#a4c7c6] font-[700]">
          {title}
        </p>
        <p className="text-[#efeee0] text-[14px] leading-[16.8px] mt-[0.8rem]">
          {description}
        </p>
        <p className="text-[#efeee0] text-[14px] leading-[16.8px] mt-[0.8rem]">
        <span> {`${length} ${length === 1 ? "track" : "tracks"} -`}</span>
         <span>  {Math.floor(duration / 3600)} hrs </span>
         <span>  {Math.floor((duration % 3600) / 60)} mins </span>
         <span>  {Math.floor((duration % 3600) % 60)} seconds </span>
        </p>
        <div className="flex  w-[70%] items-center gap-[1rem] text-[12px] leading-[14.4px] mt-[1.8rem] text-[#efeee0]">
          <Link className="flex items-center rounded-[32px] bg-[#ffffff12] backdrop-blur-[5px] p-[12px] text-[1rem] h-[45px] hover-state hover:text-[#a4c7c6]">
            <img src={playIcon} alt="play icon" />
            <span className="pl-[0.5rem]">Play All</span>
          </Link>
          <Link className="flex items-center rounded-[32px] bg-[#ffffff12] backdrop-blur-[5px] p-[12px] text-[1rem] h-[45px] hover-state hover:text-[#a4c7c6]">
            <img src={collectionIcon} alt="music collection icon" />
            <span className="pl-[0.5rem]">Add to collection</span>
          </Link>
          <Link className="flex items-center justify-center rounded-[50%] bg-[#ffffff12] backdrop-blur-[5px] p-[12px] text-[1rem] h-[45px] w-[45px] hover-state">
            <img src={redHeartIcon} alt="heart icon" />
          </Link>
        </div>
      </div>
    </div>

    {children}
    
  </div>
  )
}

export default ChartGroup