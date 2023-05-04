import { useState } from "react";

const TryAgainButton: React.FC = () => {
  const [message, setMessage] = useState("");
  
  const showMessage = (msg: string, duration: number) => {
    setMessage("Good guess but not right");
    setTimeout(() => {
      setMessage("");
    }, duration);
  };
  
  return (
    <div className="try-again">
      <button className="enter-button" onClick={() => showMessage(message, 5000)}>Enter</button>
      <div className={`message-container ${message ? "active" : ""}`}>
        <p>{message}</p>
        <p>Try again</p>
    </div>
    </div>
  );
};

export default TryAgainButton;
