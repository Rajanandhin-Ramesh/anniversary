import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "../styles/album.css";

export default function AlbumPlayer() {
  const { name } = useParams();
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const audioSrc = `/music/${name}.mp3`;

  const [media, setMedia] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // ✅ Lazy load ALL media (removed eager)
  const allMedia = import.meta.glob(
    "../assets/album/**/*.{jpg,jpeg,mp4}",
    { import: "default" }
  );

  // ✅ Load only selected album
  useEffect(() => {
    const loadMedia = async () => {
      const entries = Object.entries(allMedia).filter(
        ([path]) => path.includes(`/album/${name}/`)
      );

      const files = await Promise.all(
        entries.map(([, loader]) => loader())
      );

      setMedia(files);
      setCurrentIndex(0);
    };

    loadMedia();
  }, [name]);

  // ✅ Preload first image for fast display
  useEffect(() => {
    if (media[0]) {
      const img = new Image();
      img.src = media[0];
    }
  }, [media]);

  // ✅ Auto slideshow
  useEffect(() => {
    if (media.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === media.length - 1) {
          // Stop music on last slide
          if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
          }
          return prev;
        }
        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [media.length]);

  // ✅ Try autoplay music (browser safe)
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [media]);

  // ✅ Stop music on page leave
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const next = () =>
    setCurrentIndex((p) => (p + 1) % media.length);

  const prev = () =>
    setCurrentIndex((p) =>
      p === 0 ? media.length - 1 : p - 1
    );

  const toggleMusic = () => {
    if (!audioRef.current) return;

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

      {/* 🎵 Music */}
      <audio
        ref={audioRef}
        src={audioSrc}
        autoPlay
        loop
      />

      {/* 🔙 Back button */}
      <button
        className="back-btn-center"
        onClick={() => navigate("/memories")}
      >
        ⬅ Back to Memories
      </button>

      {/* 📸 Slideshow */}
      <div className="slideshow">
        <button className="nav-btn left" onClick={prev}>
          ❮
        </button>

        {media[currentIndex]?.includes(".mp4") ? (
  <video
    src={media[currentIndex]}
    className="slide-image"
    autoPlay
    loop
    muted
  />
) : (
  <img
    src={media[currentIndex]}
    className="slide-image"
    loading="lazy"
  />
)}


        <button className="nav-btn right" onClick={next}>
          ❯
        </button>
      </div>

      {/* 🎵 Music toggle */}
      <button className="music-btn" onClick={toggleMusic}>
        {isPlaying ? "⏸" : "🎵"}
      </button>
    </div>
  );
}
