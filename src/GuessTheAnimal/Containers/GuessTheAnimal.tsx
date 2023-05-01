import { useEffect, useState } from "react";
import "./GuessTheAnimal.css";
import words from "../WordList.json";
import AvailableLetters from "../Components/AvailableLetters";
import CurrentWordGuess from "../Components/CurrentWordGuess";
import WordToGuessImage from "../Components/WordToGuessImage";

const GuessTheAnimal = () => {
  const [wordToGuess, setWordToGuess] = useState("");
  const [currentGuess, setCurrentGuess] = useState("");

  const getNewWord = () => {
    return words[Math.floor(Math.random() * words.length)];
  };

  const hasGuessedCorrectly = () => {
    return currentGuess == wordToGuess;
  }
  
  const init = () => {
    let newWordToGuess = getNewWord();
    setWordToGuess(newWordToGuess);
  };

  useEffect(() => {
    init();
  }, [])

  const letterSelected = (letter: string) => {
    let newGuess = currentGuess + letter;
    setCurrentGuess(newGuess);

    console.log({currentGuess});
    console.log({newGuess});
    console.log({letter});
  };

  return (
    <div className="guess-the-animal-game">
      <AvailableLetters wordToGuess={wordToGuess} letterSelected={letterSelected} />
      <div className="image-and-guess">
        <WordToGuessImage wordToGuess={wordToGuess} />
        {currentGuess}
        <CurrentWordGuess wordToGuess={wordToGuess} currentGuess={currentGuess}/>
      </div>
    </div>
  );
};

export default GuessTheAnimal;
