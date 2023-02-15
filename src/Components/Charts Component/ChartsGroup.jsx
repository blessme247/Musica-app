import React from "react";
import { useSelector } from "react-redux";
import ChartsSection from "./ChartsSection";
import ChartGroup from "../ChartGroup";

const ChartsGroup = ({ setTrackIndex }) => {
  const { playlist } = useSelector((state) => state.playlistStore);
  if (!playlist) return null;

  return (
    <ChartGroup
      cover_image={playlist.picture_xl}
      length={playlist.tracks?.data.length}
      title={playlist.title}
      duration={playlist.duration}
      description={playlist.description}
    >
      <ChartsSection setTrackIndex={setTrackIndex} />
    </ChartGroup>
  );
};

export default ChartsGroup;
