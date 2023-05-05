import confetti from "canvas-confetti";
import { useState } from "react";

const ConfettiButton: React.FC = () => {
  const [message, setMessage] = useState("");
  const handleClick = () => {
    setMessage("Well done!");
    confetti({
      particleCount: 500, spread: 100, origin: { y: 0.8 }
    });
    setTimeout(() => setMessage(message), 5000);
  };

  return (
    <div>
      <button className="enter-button" onClick={handleClick}>Enter</button>
      <div className={`message-container ${message ? "active" : ""}`}>
        <p>{message}</p>
        <p>You guessed the correct animal</p>
      </div>
    </div>
  );
};

export default ConfettiButton;
