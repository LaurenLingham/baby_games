import { useEffect, useState } from "react";
import "./GuessTheAnimal.css";
import words from "../WordList.json";
import AvailableLetters from "../Components/AvailableLetters";
import CurrentWordGuess from "../Components/CurrentWordGuess";
import WordToGuessImage from "../Components/WordToGuessImage";
import ConfettiButton from "../Components/ConfettiButton";
import TryAgainButton from "../Components/TryAgainButton";

const GuessTheAnimal = () => {
  const [wordToGuess, setWordToGuess] = useState("");
  const [currentGuess, setCurrentGuess] = useState("");
  const [isGuessCorrect, setIsGuessCorrect] = useState(false);

  const getNewWord = () => {
    return words[Math.floor(Math.random() * words.length)];
  };

  const init = () => {
    let newWordToGuess = getNewWord;
    setWordToGuess(newWordToGuess);
  };

  useEffect(() => {
    init();
  }, [])

  const handleLetterSelected = (letter: string) => {
    if (wordToGuess.length > currentGuess.length) {
      let newGuess = currentGuess.concat(letter);
      setCurrentGuess(newGuess);
    }
  };

  const handleClearGuess = () => {
    const newGuess = "";
    setCurrentGuess(newGuess);
  };

  const handleResetGame = () => {
    const newGuess = "";
    setCurrentGuess(newGuess);
    init();
  };

  return (
    <div className="guess-the-animal-game">
      <div className="available-letters">
        <AvailableLetters wordToGuess={wordToGuess} letterSelected={handleLetterSelected} isGuessCorrect={isGuessCorrect} />
      </div>
      <div className="image-and-guess">
        <WordToGuessImage wordToGuess={wordToGuess} />
        <CurrentWordGuess wordToGuess={wordToGuess} currentGuess={currentGuess} />
        <div className="clear-enter-buttons">
          <button className="clear-button" onClick={handleClearGuess}>Clear</button>
          {currentGuess === wordToGuess
            ? <ConfettiButton handleResetGame={handleResetGame}/>
            : currentGuess.length === wordToGuess.length
              ? <TryAgainButton handleClearGuess={handleClearGuess}/>
              : <button className="enter-button-disabled" disabled={true}>Enter</button>
          }
        </div>
      </div>
    </div>
  );
};

export default GuessTheAnimal;
