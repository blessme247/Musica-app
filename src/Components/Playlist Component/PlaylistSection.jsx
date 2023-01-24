import React from "react";
import cardImage from "../../assets/Images/Rectangle 17.png";
import WhiteHeartIcon from "../../assets/icons/WhiteHeart.svg";
import MusicMenuIcon from "../../assets/icons/musicMenu.svg";

const PlaylistSection = () => {
  return (
    <div className="flex flex-col mt-[3rem] ">
      <div className="flex justify-between items-center p-[10px] rounded-[15px] mb-[1rem] cursor-pointer bg-[#ffffff12] backdrop-blur-[5px]">
        <div className="flex gap-[1rem]">
          <img
            className="rounded-[8.53px] w-[39px] h-[39px]"
            src={cardImage}
            alt="music cover"
          />
          <img src={WhiteHeartIcon} alt="heart icon" />
        </div>

        <p className="text-[#efeee0] text-[12px]"> Let me Love You</p>
        <p className="text-[#efeee0] text-[12px]"> Single</p>
        <p className="text-[#efeee0] text-[12px]"> 4:17</p>
        <img src={MusicMenuIcon} alt="menu icon" />
      </div>

      <div className="flex justify-between items-center p-[10px] rounded-[15px] mb-[1rem] cursor-pointer bg-[#ffffff12] backdrop-blur-[5px]">
        <div className="flex gap-[1rem]">
          <img
            className="rounded-[8.53px] w-[39px] h-[39px]"
            src={cardImage}
            alt="music cover"
          />
          <img src={WhiteHeartIcon} alt="heart icon" />
        </div>

        <p className="text-[#efeee0] text-[12px]"> Let me Love You</p>
        <p className="text-[#efeee0] text-[12px]"> Single</p>
        <p className="text-[#efeee0] text-[12px]"> 4:17</p>
        <img src={MusicMenuIcon} alt="menu icon" />
      </div>

      <div className="flex justify-between items-center p-[10px] rounded-[15px] mb-[1rem] cursor-pointer bg-[#ffffff12] backdrop-blur-[5px]">
        <div className="flex gap-[1rem]">
          <img
            className="rounded-[8.53px] w-[39px] h-[39px]"
            src={cardImage}
            alt="music cover"
          />
          <img src={WhiteHeartIcon} alt="heart icon" />
        </div>

        <p className="text-[#efeee0] text-[12px]"> Let me Love You</p>
        <p className="text-[#efeee0] text-[12px]"> Single</p>
        <p className="text-[#efeee0] text-[12px]"> 4:17</p>
        <img src={MusicMenuIcon} alt="menu icon" />
      </div>

      <div className="flex justify-between items-center p-[10px] rounded-[15px] mb-[1rem] cursor-pointer bg-[#ffffff12] backdrop-blur-[5px]">
        <div className="flex gap-[1rem]">
          <img
            className="rounded-[8.53px] w-[39px] h-[39px]"
            src={cardImage}
            alt="music cover"
          />
          <img src={WhiteHeartIcon} alt="heart icon" />
        </div>

        <p className="text-[#efeee0] text-[12px]"> Let me Love You</p>
        <p className="text-[#efeee0] text-[12px]"> Single</p>
        <p className="text-[#efeee0] text-[12px]"> 4:17</p>
        <img src={MusicMenuIcon} alt="menu icon" />
      </div>
    </div>
  );
};

export default PlaylistSection;
