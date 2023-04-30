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
    let newGuess = currentGuess;
    newGuess = newGuess.concat(letter);
    
    console.log(newGuess);
    setCurrentGuess(newGuess);
    
    console.log(currentGuess);
    console.log(letter);
  };
  
  return (
    <div>
      <AvailableLetters wordToGuess={wordToGuess} letterSelected = {letterSelected}/>
      {currentGuess}
    </div>
  );
};

export default GuessTheAnimal;
