import confetti from "canvas-confetti";
import { useState } from "react";

interface Props {
  handleResetGame: () => void;
};

const ConfettiButton = ({ handleResetGame }: Props) => {

  const [displayMessage, setDisplayMessage] = useState(false);
  
  const handleClick = () => {
    setDisplayMessage(true);
    confetti({ particleCount: 500, spread: 100, origin: { y: 0.8 } });
    setTimeout(() => {
      setDisplayMessage(false);
      handleResetGame();
    }, 4000);
  };

  return (
    <div>
      <button className="enter-button" onClick={ handleClick }>Enter</button>
      <div className={ `message-container ${ displayMessage ? "active" : "" }` }>
        <p>Well done!</p>
        <p>You guessed the correct animal</p>
      </div>
    </div>
  );
};

export default ConfettiButton;
