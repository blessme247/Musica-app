import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Navbar } from "../../Components/NavBar Component/Navbar";
import SideNav from "../../Components/SideNav Component/SideNav";
import { loadAlbum } from "../../Helper/Redux/Album/album.action";
import axiosInstance from "../../Helper/Redux/AxiosConfig/axiosConfig";
import AlbumGroup from "./AlbumGroup";

const Album = () => {
  const { query } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const getAlbumData = async () => {
      const response = await axiosInstance.get(
        `/album/${query}?index=0&limit=15`
      );
      const { data } = response;
      console.log(data, "album data");
      dispatch(loadAlbum(data));
    };
    getAlbumData();
  }, [query]);

  return (
    <div className="bg-playlist1 bg-no-repeat bg-cover bg-center backdrop-blur-[5px]">
      <Navbar />
      <div className="flex">
        <SideNav />
        <AlbumGroup />
      </div>
    </div>
  );
};

export default Album;
