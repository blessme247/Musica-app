import React from "react";
import { useSelector } from "react-redux";
import Scroller from "../../Components/Scroller";
import NewReleaseSlides from "./NewReleaseSlides";

const NewReleases = () => {
  const { newReleases } = useSelector((state) => state.newReleaseStore);
  return (
    <div className=" max-w-[1140px] items-center px-4 mx-auto ml-[6rem] mt-[3rem]">
      <p className=" text-white font-bold text-[24px]">New Releases</p>

      <NewReleaseSlides />

      {/* <div className='w-100% overflow-scroll flex justify-between items-center h-fit border border-red-500 border-solid'>
      {newReleases.length ? (
        newReleases.map((release) => {
          const { artist, title, cover_medium } = release || {};
          return (
            <Scroller >
              <div className='text-[#efeee0] flex flex-col w-[20%] cursor-pointer transition duration-150 ease-in-out hover:scale-110 '>
              <img
                className="rounded-[25px] h-[153px] object-fit object-cover mb-[0.5rem] "
                src={cover_medium}
                alt="music art"
              />
              <p className="text-[#efeee0]">{title}</p>
              <p className="text-[#efeee0]">{artist.name}</p>
              </div>
            </Scroller>
          );
        })
        ) : (
          <p className="text-[#efeee0]">No New Releases yet</p>
          )}
          </div> */}
     </div>
  );
};

export default NewReleases;
