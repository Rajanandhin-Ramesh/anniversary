import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/romantic.css";

function Home() {
  // Floating hearts effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const heart = document.createElement("div");
      const hearts = ["💗", "💖", "💞", "💘", "💕"];
      heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.position = "fixed";
      heart.style.left = e.pageX + "px";
      heart.style.top = e.pageY + "px";
      heart.style.pointerEvents = "none";
      heart.style.fontSize = Math.random() * 20 + 15 + "px";
      heart.style.color = ["#ff66b2", "#ff3399", "#ff1a8c", "#ff99cc"][Math.floor(Math.random()*4)];
      heart.style.textShadow = "0 0 10px rgba(255,255,255,0.6)";
      heart.style.animation = "floatUp 1.5s linear forwards";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 1500);
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup on unmount
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="home-container">
      <div className="overlay">
        <h1 className="home-title">Forever With Viv 💖</h1>
        <p className="home-subtitle">
          Feb 15 • Our Valentine & Wedding Anniversary
        </p>
        <p className="home-text">
          A little place where our love lives, <br />
          in memories, music, and moments 💕
        </p>
        <Link to="/gifts" className="home-btn">
          Start Our Journey ✨
        </Link>
      </div>
    </div>
  );
}

export default Home;
