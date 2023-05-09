import { useState } from "react";

interface Props {
  handleClearGuess: () => void;
};

const TryAgainButton = ({ handleClearGuess }: Props) => {
  
  const [displayMessage, setDisplayMessage] = useState(false);

  const showMessage = () => {
    setDisplayMessage(true);
    setTimeout(() => {
      setDisplayMessage(false);
      handleClearGuess();
    }, 4000);
  };

  return (
    <div className="try-again">
      <button className="enter-button" onClick={ showMessage }>Enter</button>
      <div className={ `message-container ${ displayMessage ? "active" : "" }` }>
        <p>Good guess but not right</p>
        <p>Try again</p>
      </div>
    </div>
  );
};

export default TryAgainButton;
