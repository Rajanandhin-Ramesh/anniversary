import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "../styles/album.css";

export default function AlbumPlayer() {
  const { name } = useParams();
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const audioSrc = `/music/${name}.mp3`; 

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // ✅ Load ALL media once (static path required)
  const allMedia = import.meta.glob(
    "../assets/album/**/*.{jpg,jpeg,JPG,mp4}",
    { eager: true, import: "default" }
  );

  // ✅ Filter only selected album
  const media = Object.entries(allMedia)
    .filter(([path]) => path.includes(`/album/${name}/`))
    .map(([, file]) => file);

  // Auto slideshow
 useEffect(() => {
  if (media.length === 0) return;

  const interval = setInterval(() => {
    setCurrentIndex((prev) => {
      if (prev === media.length - 1) {
        // Stop slideshow
        clearInterval(interval);

        // STOP music when last image is reached
        if (audioRef.current) {
          audioRef.current.pause();
        }

        return prev; // stay on last image
      }
      return prev + 1;
    });
  }, 4000);

  // Cleanup on unmount
  return () => clearInterval(interval);
}, [media]);


  const next = () =>
    setCurrentIndex((p) => (p + 1) % media.length);

  const prev = () =>
    setCurrentIndex((p) =>
      p === 0 ? media.length - 1 : p - 1
    );

  const toggleMusic = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="album-player-page">
      <div className="album-player-wrapper"></div>
      <audio
  ref={audioRef}
  src={audioSrc}
  autoPlay
/>



      <button className="back-btn-center" onClick={() => navigate("/memories")}>
        ⬅ Back to Memories
      </button>

      <div className="slideshow">
        <button className="nav-btn left" onClick={prev}>❮</button>

        {media[currentIndex]?.includes(".mp4") ? (
          <video
            src={media[currentIndex]}
            className="slide-image"
            autoPlay
            loop
            muted
          />
        ) : (
          <img src={media[currentIndex]} className="slide-image" />
        )}

        <button className="nav-btn right" onClick={next}>❯</button>
      </div>

      <button className="music-btn" onClick={toggleMusic}>
        {isPlaying ? "⏸" : "🎵"}
      </button>
    </div>
  );
}
