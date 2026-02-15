import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";   // your Home page
import Gifts from "./pages/Gifts";
import Gift1 from "./pages/Gift1";
import Gift2 from "./pages/Gift2";
import AlbumsHome from "./pages/AlbumsHome";
import AlbumPlayer from "./pages/AlbumPlayer";
import TreasureHunt from "./pages/TreasureHunt";
import SecretEntry from "./pages/SecretEntry";
import Forever from "./pages/Forever";

import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Secret first */}
        <Route path="/" element={<SecretEntry />} />

        {/* After unlock */}
        <Route path="/home" element={<Home />} />

        <Route path="/gifts" element={<Gifts />} />
        <Route path="/gift1" element={<Gift1 />} />
        <Route path="/gift2" element={<Gift2 />} />

        <Route path="/memories" element={<AlbumsHome />} />
        <Route path="/album/:name" element={<AlbumPlayer />} />

        <Route path="/treasure" element={<TreasureHunt />} />
        <Route path="/forever" element={<Forever />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;