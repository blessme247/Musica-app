import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ChartCard from "../../Components/ChartCard";

const TopCharts = () => {
  const { charts } = useSelector((state) => state.chartsStore);
  return (
    <div className="flex flex-col w-[28%]">
      <p className="text-[#efeee0] text-[24px] leading-[28.8px] font-bold">
        Top Charts
      </p>

      {charts.length > 0 ? (
        charts.map((chart) => {
            const {id, title, picture_medium, user } = chart;
          return (
            <Link to={`/playlist/${id}`} key={id}>
              <ChartCard title={title} cover_image={picture_medium} name={user.name} />
            </Link>
          );
        })
      ) : (
        <p className='text-[#efeee0]'>No Charts yet</p>
      )}
    </div>
  );
};

export default TopCharts;
