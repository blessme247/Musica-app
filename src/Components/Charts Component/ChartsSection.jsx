import React from "react";
import WhiteHeartIcon from "../../assets/icons/WhiteHeart.svg";
import MusicMenuIcon from "../../assets/icons/musicMenu.svg";

const ChartsSection = (props) => {
  const {songTitle, songType, songDuration, coverImage} = props;
  return (
    <div className="flex flex-col mt-[3rem] ">
      <div className="flex justify-between items-center p-[10px] rounded-[15px] mb-[1rem] cursor-pointer bg-[#ffffff12] backdrop-blur-[5px]">
        <div className="flex gap-[1rem]">
          <img
            className="rounded-[8.53px] w-[39px] h-[39px]"
            src={coverImage}
            alt="music cover"
          />
          <img src={WhiteHeartIcon} alt="heart icon" />
        </div>

        <p className="text-[#efeee0] text-[12px]"> {songTitle}</p>
        <p className="text-[#efeee0] text-[12px]"> {songType}</p>
        <p className="text-[#efeee0] text-[12px]"> {songDuration}</p>
        <img src={MusicMenuIcon} alt="menu icon" />
      </div>

    </div>
  );
};

export default ChartsSection;
