import React from "react";
import { useSelector } from "react-redux";
import ChartGroup from "../../Components/ChartGroup";
import AlbumList from "./AlbumList";

const AlbumGroup = () => {
  
  const { album } = useSelector((state) => state.albumStore);
  if (!album) {
    return null;
  }

  return (
    <ChartGroup
      cover_image={album.cover_medium}
      length={album.tracks?.data.length}
      title={album.title}
      duration={album.duration}
    >
      <AlbumList />
    </ChartGroup>
  );
};

export default AlbumGroup;
