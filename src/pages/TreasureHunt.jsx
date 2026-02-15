import React, { useState, useEffect, useRef } from "react";
import Confetti from "react-confetti";
import "../styles/treassure.css";

const clues = [
  {
    question: "Clue 1 💖 Do you remember where we first saw each other and our love quietly began?",
    answer: "temple",
  },
  {
    question: "Clue 2 : Our first date… where you stole my heart even more 😘",
    answer: "movie",
  },
  {
    question: "Clue 3 : The place where waves heard our laughter and my heart felt peaceful with you 💕",
    answer: "beach",
  },
  {
    question: "Clue 4 : What do you always ask from me when you're tired? 😌",
    answer: "massage",
  },
  {
    question: "Clue 5 : Something I make with love that you always enjoy the most ❤️",
    answer: "cooking",
  },
  {
    question: "Final Clue : Your favorite place in the whole world… where love feels safest 💞",
    answer: "home",
  },
];


export default function TreasureHunt() {
  const [currentClue, setCurrentClue] = useState(0);
  const [input, setInput] = useState("");
  const [popup, setPopup] = useState(null); // correct / wrong
  const [foundTreasure, setFoundTreasure] = useState(false);
  const audioRef = useRef(null);
  const [showMessage, setShowMessage] = useState(false);

  const checkAnswer = () => {
  if (input.toLowerCase().trim() === clues[currentClue].answer) {
    setPopup("correct");

    setTimeout(() => {
      setPopup(null);
      setInput("");

      if (currentClue + 1 < clues.length) {
        setCurrentClue(currentClue + 1);
      } else {
        setFoundTreasure(true);
      }
    }, 1500);

  } else {
    setPopup("wrong");
    setTimeout(() => setPopup(null), 1200);
  }
};


  return (
    <div className="treasure-container">
      <audio ref={audioRef} src="/music/growing.mp3" loop />

      <h1 className="title">💖 Our Love Treasure Hunt 💖</h1>

      {!foundTreasure && (
        <div className="clue-box">
          <p className="clue-text">{clues[currentClue].question}</p>

          <input
            type="text"
            placeholder="Type your answer here ❤️"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="answer-input"
          />

          <button onClick={checkAnswer} className="submit-btn">
            Check 💌
          </button>
        </div>
      )}

      {/* POPUP */}
      {popup && (
        <div className={`popup ${popup}`}>
          {popup === "correct" ? "Yayyy correct my love 💖" : "Wrong baby 😜 Try again!"}
        </div>
      )}

      {foundTreasure && (
        <>
          <Confetti width={window.innerWidth} height={window.innerHeight} />

         

            <div className="treasure-box">
  <h2>🎁 Your Surprise is Waiting 💕</h2>

  {!showMessage ? (
    <button
      className="surprise-btn"
      onClick={() => setShowMessage(true)}
    >
      Open Your Surprise 💖
    </button>
  ) : (
    <p className="final-line">
      Your surprise gift is waiting for you…  
      just outside your door 💖✨
    </p>
  )}
</div>
          
        </>
      )}
    </div>
  );
}
