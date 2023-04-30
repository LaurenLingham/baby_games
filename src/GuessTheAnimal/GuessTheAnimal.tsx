//import Letter from "./Letter.jsx";

import { useEffect, useState } from "react";
import AvailableLetterTile from "./AvailableLetterTile";
import words from "./WordList.json";
import AvailableLetters from "./AvailableLetters";

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
      newLetters.push(<AvailableLetterTile letter={character} />);
    }

    setLetters(newLetters);
  }

  const letterSelected = (letter: string) => {
    setCurrentGuess(currentGuess.concat(letter));

    // re-render guessed letters
  }

  const handleLetterClick = (e) => {
    
  }
  
  return (
    <div>
      <AvailableLetters letters={letters}/>
      {...letters}
    </div>
  );
}

export default GuessTheAnimal;
