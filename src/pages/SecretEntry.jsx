import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/album.css";

export default function SecretEntry() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const checkPassword = () => {
  if (password.toLowerCase() === "vihaana") {
    sessionStorage.setItem("unlocked", "true");
    navigate("/home");
  } else {
    alert("Only my Vivek knows this secret 💕🔐");
  }
};



  return (
    <div className="secret-page">
      <h1>🔐 Our Private World</h1>

      <p className="secret-subtitle">
        Some memories are only for us... 💖
      </p>

      <input
        type="password"
        placeholder="Enter our biggest love..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={checkPassword}>
        Unlock Our Memories 💞
      </button>

      <p className="secret-hint">
        Hint: Our little princess 👶💗
      </p>
    </div>
  );
}
