import { useNavigate } from "react-router-dom";
import "../styles/romantic.css";

function Gifts() {
  const navigate = useNavigate();

  return (
    <div className="outer-bg">
      <div className="main-card">

        <h1 className="main-title">
          💝 Your Valentine Gifts 💝
        </h1>

        <div className="gift-row">

          <div
            className="gift-box"
            onClick={() => navigate("/gift1")}
          >
            <h2>Gift 1</h2>
            <div className="gift-icon">🎁</div>
          </div>

          <div
            className="gift-box"
            onClick={() => navigate("/gift2")}
          >
            <h2>Gift 2</h2>
            <div className="gift-icon">🎁</div>
          </div>

        </div>

        <button 
          className="back-btn"
          onClick={() => navigate("/home")}
        >
          Back to Home 💖
          
        </button>

      </div>
    </div>
  );
}

export default Gifts;
