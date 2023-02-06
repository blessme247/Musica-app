import React from "react";
import { useSelector } from "react-redux";
import TrackCard from "../../Components/TrackCard";

const AlbumList = () => {
  const { album } = useSelector((state) => state.albumStore);

  let { tracks } = album;
  if (!album) return null;

  return (
    <div className="my-[3.06rem]">
      {tracks
        ? tracks.data.map((track) => {
            const { album, artist, title, duration, id } = track;
            return (
              <TrackCard
                key={id}
                cover_image={album?.cover_medium}
                title={title.slice(0, 25)}
                name={artist.name}
                duration={duration}
              />
            );
          })
        : null}
    </div>
  );
};

export default AlbumList;
