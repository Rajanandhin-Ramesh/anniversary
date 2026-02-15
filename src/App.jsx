import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import Gifts from "./pages/Gifts";
import Gift1 from "./pages/Gift1";
import Gift2 from "./pages/Gift2";
import AlbumsHome from "./pages/AlbumsHome";
import AlbumPlayer from "./pages/AlbumPlayer";
import TreasureHunt from "./pages/TreasureHunt";
import SecretEntry from "./pages/SecretEntry";
import Forever from "./pages/Forever";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

function AppRoutes() {
  const location = useLocation();

  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const status =
      sessionStorage.getItem("unlocked") === "true";
    setUnlocked(status);
  }, [location]);


  return (
    <>
      {/* Navbar only after unlock */}
      {unlocked && location.pathname !== "/" && <Navbar />}

      <Routes>
        <Route path="/" element={<SecretEntry />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/gifts"
          element={
            <ProtectedRoute>
              <Gifts />
            </ProtectedRoute>
          }
        />

        <Route
          path="/gift1"
          element={
            <ProtectedRoute>
              <Gift1 />
            </ProtectedRoute>
          }
        />

        <Route
          path="/gift2"
          element={
            <ProtectedRoute>
              <Gift2 />
            </ProtectedRoute>
          }
        />

        <Route
          path="/memories"
          element={
            <ProtectedRoute>
              <AlbumsHome />
            </ProtectedRoute>
          }
        />

        <Route
          path="/album/:name"
          element={
            <ProtectedRoute>
              <AlbumPlayer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/treasure"
          element={
            <ProtectedRoute>
              <TreasureHunt />
            </ProtectedRoute>
          }
        />

        <Route
          path="/forever"
          element={
            <ProtectedRoute>
              <Forever />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
