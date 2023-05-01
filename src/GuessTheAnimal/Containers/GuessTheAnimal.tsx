import { useEffect, useState } from "react";
import words from "../WordList.json";
import AvailableLetters from "../Components/AvailableLetters";
import CurrentWordGuess from "../Components/CurrentGuess";
import WordToGuessImage from "../WordToGuessImage";

const GuessTheAnimal = () => {
  const [wordToGuess, setWordToGuess] = useState("");
  const [currentGuess, setCurrentGuess] = useState("");

  useEffect(() => {
    init();
  }, [])

  const getNewWord = () => {
    return words[Math.floor(Math.random() * words.length)];
  };

  const init = () => {
    let newWordToGuess = getNewWord();
    setWordToGuess(newWordToGuess);
  };

  const letterSelected = (letter: string) => {
    let newGuess = currentGuess;
    newGuess = newGuess.concat(letter);

    console.log(newGuess);
    setCurrentGuess(newGuess);

    console.log(currentGuess);
    console.log(letter);
  };

  return (
    <div>
      <AvailableLetters wordToGuess={wordToGuess} letterSelected={letterSelected} />
      {currentGuess}
      <div className="image-and-guess">
        <WordToGuessImage />
        <CurrentWordGuess />
      </div>
    </div>
  );
};

export default GuessTheAnimal;
