import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">💖 Viv & Nandhu 💖</div>

      <ul className="navbar-links">
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/gifts">Love Letter</NavLink></li>
        <li><NavLink to="/memories">Memories</NavLink></li>
        <li><NavLink to="/treasure">Treasure Hunt</NavLink></li>
        <li><NavLink to="/forever">Forever</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
