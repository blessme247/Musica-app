import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axiosInstance from "../../Helper/Redux/AxiosConfig/axiosConfig";
import { loadAudioQueue } from "../../Helper/Redux/DataStore/AudioQueue/queue.action";
import { loadPlaylist } from "../../Helper/Redux/Playlist/playlist.action";
import { Navbar } from "../NavBar Component/Navbar";
import SideNav from "../SideNav Component/SideNav";
import ChartsGroup from "./ChartsGroup";

const Charts = ({setTrackIndex}) => {

  const { query } = useParams();
  const dispatch = useDispatch();


  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axiosInstance.get(
        `/playlist/${query}?index=0&limit=15`
      );
      const { data } = response;
      dispatch(loadPlaylist(data));
      const {tracks} = data;
      dispatch(loadAudioQueue(tracks.data));
    };
    getPlaylistData();
  }, [query, dispatch]);


  const { playlist } = useSelector((state) => state.playlistStore);
  if (!playlist) return null;

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(15, 18, 19, 0.85), rgba(15, 18, 19, 0.85)), url(${playlist?.picture_xl})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        height: "100vh",
        overflowY: "scroll",
      }}
    >
      <div className="w-[95%] max-w-[1240px] mx-[auto]">
        <Navbar />
        <div className="flex ">
          <SideNav />
          <ChartsGroup setTrackIndex={setTrackIndex} />
        </div>
      </div>
    </div>
  );
};

export default Charts;
