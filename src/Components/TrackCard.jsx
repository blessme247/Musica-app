import React from "react";
import WhiteHeartIcon from "../assets/icons/WhiteHeart.svg";
import MusicMenuIcon from "../assets/icons/musicMenu.svg";
import { useSelector } from "react-redux";

const TrackCard = (props) => {
  const { cover_image, title, name, duration, data, setTrackIndex } = props;

  let { audioQueue } = useSelector((state) => state.audioqueueStore);
  if (!audioQueue) return null;

  const playTrack = (e) => {
    e.preventDefault();

    const songIndex = audioQueue.indexOf(data);
    setTrackIndex(songIndex);
  };
  return (
    <div className="flex flex-col mt-[1rem] w-[100%]">
      <div className="flex justify-between items-center p-[10px] rounded-[15px] cursor-pointer bg-[#ffffff12] backdrop-blur-[5px] hover-state">
        <div className="flex gap-[1rem]">
          <a href="/" onClick={(e) => playTrack(e)}>
            <img
              className="rounded-[8.53px] w-[39px] h-[39px]"
              src={cover_image}
              alt="music cover"
            />
          </a>
          <img src={WhiteHeartIcon} alt="heart icon" />
        </div>

        <p className="text-[#efeee0] text-[12px] w-[25%] text-left">
          {" "}
          {title} - {name}
        </p>
        <p className="text-[#efeee0] text-[12px] w-[25%]  text-left">
          {" "}
          {title}
        </p>
        <p className="text-[#efeee0] text-[12px] w-[fit-content]  text-left">
          <span>{Math.floor(duration / 60)} : </span>
          <span>{("0" + (duration % 60)).slice(-2)} </span>
        </p>
        <img src={MusicMenuIcon} alt="menu icon" />
      </div>
    </div>
  );
};

export default TrackCard;
