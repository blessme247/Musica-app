import React from 'react'
import likeIcon from "../assets/icons/like.svg";

const ChartCard = ({title, name, cover_image}) => {
  return (
    <div className="bg-[#1a1e1f] flex justify-between items-center rounded-[20px] p-3 mt-3 cursor-pointer transition duration-150 ease-in-out  hover:scale-105">
    <img
      src={cover_image}
      className="rounded-[10px] h-50px] w-[70px] object-cover object-center"
      alt="artiste"
    />

    <div className="text-white">
      <p className="text-[17px] font-medium">{title}</p>
      <p className="text-[12px]">{name}</p> 
    </div>

    <img src={likeIcon} alt="heart icon" />
  </div>
  )
}

export default ChartCard