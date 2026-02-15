import { useNavigate } from "react-router-dom";
import "../styles/album.css";

export default function AlbumsHome() {
  const navigate = useNavigate();

  const covers = import.meta.glob("../assets/covers/*.jpg", {
    eager: true,
    import: "default",
  });

  const getCover = (name) => {
    const path = Object.keys(covers).find((p) =>
      p.toLowerCase().includes(`${name}.jpg`)
    );
    return path ? covers[path] : "/default-cover.jpg";
  };

  const albums = [
    { name: "marriage", title: "Our Wedding 💍" },
    { name: "honeymoon", title: "Honeymoon Dreams 🌙" },
    { name: "growing", title: "Growing Together 🌱" },
    { name: "pregnancy", title: "Waiting for Our Angel 🤰" },
    { name: "vihaana", title: "With Our Vihaana 👶💖" },
    { name: "personal", title: "Just You & Me ❤️" },
  ];

  return (
    <div className="album-grid-page">
      <h1 className="album-title">
        Our Love Story in Memories 💞
      </h1>

      <p className="album-subtitle">
        Every photo holds a heartbeat of us ❤️
      </p>

      <div className="album-grid">
        {albums.map((a) => (
          <div
            key={a.name}
            className="album-card"
            onClick={() => navigate(`/album/${a.name}`)}
          >
            <img
              src={getCover(a.name)}
              alt={a.title}
              className="album-cover"
            />

            <div className="album-overlay">
              <h2>{a.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
