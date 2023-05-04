import { useState } from "react";

const TryAgainButton: React.FC = () => {
  const [message, setMessage] = useState("");
  
  const showMessage = (msg: string, duration: number) => {
    setMessage("Good guess but not right.  Try again");
    setTimeout(() => {
      setMessage("");
    }, duration);
  };
  
  return (
    <div className="try-again">
      <button className="enter-button" onClick={() => showMessage(message, 3000)}>Enter</button>
      <p className="try-again-message">{message}</p>
    </div>
  );
};

export default TryAgainButton;
