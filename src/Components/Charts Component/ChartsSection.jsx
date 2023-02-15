import React from "react";
import { useSelector } from "react-redux";
import TrackCard from "../TrackCard";

const ChartsSection = ({setTrackIndex}) => {
  const { playlist } = useSelector((state) => state.playlistStore);

  let { tracks } = playlist;
  if (!playlist) return null;

  return (
    <div className="my-[3.06rem]">
      {tracks
        ? tracks.data.map((track) => {
            const { album, artist, title, duration, id } = track;
            return (
              <TrackCard
                setTrackIndex={setTrackIndex}
                key={id}
                cover_image={album?.cover_medium}
                title={title}
                name={artist.name}
                duration={duration}
                data={track}
              />
            );
          })
        : null}
    </div>
  );
};

export default ChartsSection;
