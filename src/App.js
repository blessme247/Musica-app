import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Charts from "./Components/Charts Component/Charts";
import MusicPlayer from "./Components/MusicPlayer";
import { loadCharts } from "./Helper/Redux/Charts/charts.action";
import ChartsServices from "./Helper/Redux/Charts/charts.service";
import Album from "./Pages/Album/Album";
import Homepage from "./Pages/Homepage/Homepage";

function App() {

  const [currentTrack, setTrackIndex] = useState("0")

  const dispatch = useDispatch();

  useEffect(()=>{
    ChartsServices.fetchCharts().then((response)=>{
      dispatch(loadCharts(response))
    }
  )}, [dispatch])


  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/playlist/:query" element={<Charts setTrackIndex={setTrackIndex} />} />
        <Route path="/album/:query" element={<Album setTrackIndex={setTrackIndex} />} />
      </Routes>
      <MusicPlayer currentTrack={currentTrack} setTrackIndex={setTrackIndex}/>
    </div>
  );
}

export default App;
