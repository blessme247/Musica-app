import React from "react";
import cardImage from "../../assets/Images/Rectangle 17.png";

import likeIcon from "../../assets/icons/like.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TopCharts = () => {
  const { charts } = useSelector((state) => state.chartsStore);
  console.log(charts, "TopCharts")
  return (
    <div className="flex flex-col w-[28%]">
      <p className="text-white text-[24px] leading-[28.8px] font-bold">
        Top Charts
      </p>

      {charts.length > 0 ? (
        charts.map((chart) => {
            const {id, title, picture_medium, user } = chart;
          return (
            <Link to={`/playlist/${id}`}>
              <div className="bg-[#1a1e1f] flex justify-between items-center rounded-[20px] p-3 mt-3 cursor-pointer transition duration-150 ease-in-out  hover:scale-105">
                <img
                  src={picture_medium}
                  className="rounded-[10px] h-50px] w-[70px] object-cover object-center"
                  alt="artiste"
                />

                <div className="text-white">
                  <p className="text-[17px] font-medium">{title}</p>
                  <p className="text-[12px]">{user.name}</p> 
                  {/* <p className="text-[12px]">{chartDuration}</p>  */}
                </div>

                <img src={likeIcon} alt="heart icon" />
              </div>
            </Link>
          );
        })
      ) : (
        <p>No Charts yet</p>
      )}
    </div>
  );
};

export default TopCharts;
