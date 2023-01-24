import React from "react";
import { Route, Routes } from "react-router-dom";
import Playlist from "./Components/Playlist Component/Playlist";
import Homepage from "./Pages/Homepage/Homepage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/playlist" element={<Playlist />} />
      </Routes>
    </div>
  );
}

export default App;
