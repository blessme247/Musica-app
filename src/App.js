import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Charts from "./Components/Charts Component/Charts";
import { loadCharts } from "./Helper/Redux/Charts/charts.action";
import ChartsServices from "./Helper/Redux/Charts/charts.service";
import { loadPlaylist } from "./Helper/Redux/Playlist/playlist.action";
import PlaylistServices from "./Helper/Redux/Playlist/playlist.service";
import Homepage from "./Pages/Homepage/Homepage";

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    ChartsServices.fetchCharts().then((response)=>{
      dispatch(loadCharts(response))
    }
  )}, [dispatch])

  const {charts} = useSelector((state) => state.chartsStore);
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/playlist/:query" element={<Charts />} />

      </Routes>
    </div>
  );
}

export default App;
