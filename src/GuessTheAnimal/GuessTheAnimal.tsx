//import Letter from "./Letter.jsx";

import { useEffect, useState } from "react";
import Letter from "./Letter";
import words from "./WordList.json";

const GuessTheAnimal = () => {
  
  const [wordToGuess, setWordToGuess] = useState("testt");
  const [letters, setLetters] = useState<JSX.Element[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");

  useEffect(() => {
    init();
  }, [])
  
  const getNewWord = () => {
    return words[Math.floor(Math.random() * (words.length + 1))];
  }
  
  const init = () => {
    setWordToGuess(getNewWord());
    
    let newLetters: JSX.Element[] = [];
    for (let character of wordToGuess) {
      newLetters.push(<Letter letter={character} />);
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
