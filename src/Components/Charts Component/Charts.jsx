import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axiosInstance from "../../Helper/Redux/AxiosConfig/axiosConfig";
import { loadPlaylist } from "../../Helper/Redux/Playlist/playlist.action";
import { Navbar } from "../NavBar Component/Navbar";
import SideNav from "../SideNav Component/SideNav";
import ChartsGroup from "./ChartsGroup";

const Charts = () => {
  

  const { query } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axiosInstance.get(
        `/playlist/${query}?index=0&limit=15`
      );
      const { data } = response;
      console.log(data, "playlist data")
      dispatch(loadPlaylist(data));
    };
    getPlaylistData();
  }, [query]);

  
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
