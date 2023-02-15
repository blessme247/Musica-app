import React from "react";
import AudioPlayer from "react-h5-audio-player";

import "react-h5-audio-player/lib/styles.css";
import { useSelector } from "react-redux";
import "../customStyles/audio-player.css";

const MusicPlayer = ({ currentTrack, setTrackIndex }) => {
  const { audioQueue } = useSelector((state) => state.audioqueueStore);

  if (!audioQueue) return null;

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < audioQueue?.length - 1 ? currentTrack + 1 : 0
    );
  };

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? audioQueue?.length - 1 : currentTrack - 1
    );
  };

  return (
    <section className="audio-container">
      <div className="audio-details">
        <img src={audioQueue[currentTrack]?.album.cover_medium} alt="" />
        <div>
          <h3 className="text-[#efeee0]">{audioQueue[currentTrack]?.title}</h3>
          <p className="text-[#efeee0]">{audioQueue[currentTrack]?.artist.name}</p>
        </div>
      </div>
      <AudioPlayer
        src={audioQueue[currentTrack]?.preview}
        showSkipControls
        showJumpControls={false}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onEnded={handleClickNext}
        className="player"
      ></AudioPlayer>
    </section>
  );
};

export default MusicPlayer;
