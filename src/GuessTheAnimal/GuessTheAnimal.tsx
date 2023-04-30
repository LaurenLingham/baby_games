//import Letter from "./Letter.jsx";

import { useEffect, useState } from "react";
import words from "./WordList.json";
import AvailableLetters from "./AvailableLetters";

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
    setCurrentGuess(currentGuess.concat(letter));

    // re-render guessed letters
  };

  const handleLetterClick = (e) => {
    
  };
  
  return (
    <div>
      <AvailableLetters wordToGuess={wordToGuess}/>
    </div>
  );
};

export default GuessTheAnimal;
