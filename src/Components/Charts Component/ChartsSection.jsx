import React from "react";
import WhiteHeartIcon from "../../assets/icons/WhiteHeart.svg";
import MusicMenuIcon from "../../assets/icons/musicMenu.svg";
import { useSelector } from "react-redux";

const ChartsSection = () => {

  const { playlist } = useSelector((state) => state.playlistStore);

  // console.log(playlist.tracks.data, "chartsSection")
  let { tracks } = playlist;
  console.log(tracks, "chartsSection")
  if(!playlist) return null;

  return (
    
    <div className="my-[3.06rem]">
      {tracks
        ? tracks.data.map((track) => {
            const { album, artist, title, duration } = track;
            return (
              <div className="flex flex-col mt-[1rem] w-[100%]">
                <div className="flex justify-between items-center p-[10px] rounded-[15px] cursor-pointer bg-[#ffffff12] backdrop-blur-[5px] hover-state">
                  <div className="flex gap-[1rem]">
                    <img
                      className="rounded-[8.53px] w-[39px] h-[39px]"
                      src={album?.cover_medium}
                      alt="music cover"
                    />
                    <img src={WhiteHeartIcon} alt="heart icon" />
                  </div>

                  <p className="text-[#efeee0] text-[12px] w-[25%] text-left"> {title} - {artist.name}</p>
                  <p className="text-[#efeee0] text-[12px] w-[25%]  text-left"> {title}</p>
                  <p className="text-[#efeee0] text-[12px] w-[fit-content]  text-left"> 
                  <span>{Math.floor(duration / 60)} : </span>
                  <span>{("0" + (duration % 60)).slice(-2)} </span>
                  </p>
                  <img src={MusicMenuIcon} alt="menu icon" />
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default ChartsSection;
