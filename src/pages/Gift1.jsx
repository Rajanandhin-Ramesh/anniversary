import { useNavigate } from "react-router-dom";
import "../styles/romantic.css";
import letterImage from "../assets/love.png";

function Gift1() {
  const navigate = useNavigate();

  return (
    <div className="popup-page">
      <img src={letterImage} alt="Love Letter" className="popup-image" />

      {/* Back button */}
      <button 
        className="back-btn" 
        onClick={() => navigate("/gifts")}
      >
        Back to Gifts
      </button>
    </div>
  );
}

export default Gift1;
