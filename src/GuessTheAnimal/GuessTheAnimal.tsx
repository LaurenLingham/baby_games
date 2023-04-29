//import Letter from "./Letter.jsx";

import { useEffect, useState } from "react";
import LetterTile from "./LetterTile";
import words from "./WordList.json";

const GuessTheAnimal = () => {
  
  const [wordToGuess, setWordToGuess] = useState("");
  const [letters, setLetters] = useState<JSX.Element[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");

  useEffect(() => {
    init();
  }, [])
  
  const getNewWord = () => {
    return words[Math.floor(Math.random() * (words.length + 1))];
  }
  
  const init = () => {
    let newWordToGuess = getNewWord();

    setWordToGuess(newWordToGuess);
    
    console.log(newWordToGuess);

    let newLetters: JSX.Element[] = [];
    for (let character of newWordToGuess) {
      newLetters.push(<LetterTile letter={character} />);
    }

    setLetters(newLetters);
  }

  const letterSelected = (letter: string) => {
    setCurrentGuess(currentGuess.concat(letter));

    // re-render guessed letters
  }
  
  return (
    <div>
      {...letters}
    </div>
  );
}

export default GuessTheAnimal;
