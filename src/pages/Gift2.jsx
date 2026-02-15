import { useNavigate } from "react-router-dom";
import "../styles/romantic.css";

function Gift2() {
  const navigate = useNavigate();

  return (
    <div className="outer-bg">
      <div className="content-card">

        <h1 className="content-title"><b><i>💌 A Special Message to My dear handsome husband❤️</i></b></h1>

        <div className="love-content"><i>
          <p>
            When I sleep close to you, resting in your heart, I sometimes cannot control my feelings 🥰.
            There were so many times I wanted to express my romance and love more openly,
            but something inside me held me back. So I quietly kept those feelings within myself… loving you silently, deeply 💕.
          </p>
          <p>
            The most beautiful moments of my life are the ones I have lived with you after our marriage 💍.
          </p>
          <p>
            Kodaikanal — our little escape into the clouds ☁️❤️.
            <br />
            The delivery room — where we became parents and welcomed our angel into this world 👶🏻✨.
            <br />
            Your dream of entering IIM — watching you work hard, believe in yourself, and chase your goals makes me so proud 📚🌟.
            <br />
            Going to films together, sitting side by side, sharing laughs and glances 🎬🤍 — every small moment with you becomes a memory I treasure.
          </p>
          <p>
            Each of these moments makes me happier than words can explain.
            Being with you is my comfort, my excitement, my peace, and my forever 💖.
          </p>
        </i></div>

        {/* Back button */}
        <button 
          className="back-btn" 
          onClick={() => navigate("/gifts")}
        >
          Back to Gifts
        </button>

      </div>
    </div>
  );
}

export default Gift2;
