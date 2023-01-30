import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCharts } from "../../Helper/Redux/Charts/charts.action";
import ChartsServices from "../../Helper/Redux/Charts/charts.service";
import { loadPlaylist } from "../../Helper/Redux/Playlist/playlist.action";
import PlaylistServices from "../../Helper/Redux/Playlist/playlist.service";
import { Navbar } from "../NavBar Component/Navbar";
import SideNav from "../SideNav Component/SideNav";
import ChartsGroup from "./ChartsGroup";

const Charts = () => {
  

  const dispatch = useDispatch();
  // useEffect(() => {
  //   PlaylistServices.fetchPlayList().then((response) => {
  //     dispatch(loadPlaylist(response));
  //   });

  // }, [dispatch]);

  
  return (
    <div className="bg-playlist1 bg-no-repeat bg-cover bg-center backdrop-blur-[5px]">
      <Navbar />
      <div className="flex">
        <SideNav />
        <ChartsGroup />
      </div>
    </div>
  );
};

export default Charts;
