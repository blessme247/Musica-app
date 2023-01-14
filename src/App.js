import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/NavBar Component/Navbar";
import SideNav from "./Components/SideNav Component/SideNav";
import Homepage from "./Pages/Homepage/Homepage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
