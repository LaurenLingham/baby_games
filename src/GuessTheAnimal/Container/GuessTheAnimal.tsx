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
  const [displayedLetters, setDisplayedLetters] = useState<{ letter: string, guessed: boolean }[]>([]);

  const getNewWord = () => {
    return words[Math.floor(Math.random() * words.length)];
  };

  const generateDisplayedLetters = (newWordToGuess: string): void => {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let letters: string = "";
    for (let character of newWordToGuess) {
      if (alphabet.includes(character)) {
        alphabet = alphabet.replace(character, "");
      }
      letters += character;
    }

    const numberOfAdditionalLetters = 8 - newWordToGuess.length;
    const usedLetters = new Set(newWordToGuess);
    for (let i = 0; i < numberOfAdditionalLetters; i++) {
      let additionalLetter;
      do {
        additionalLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
      } while (usedLetters.has(additionalLetter));
      usedLetters.add(additionalLetter);
      letters += additionalLetter;
    }

    const scramble = (inputElements: string): string => {
      const elements = inputElements.split("");
      for (let i = elements.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [elements[i], elements[j]] = [elements[j], elements[i]];
      }
      return elements.join("");
    };

    const scrambledLetters = scramble(letters);

    const displayedLetterObjects = scrambledLetters
      .split("")
      .map(letter => {
        return { letter, guessed: false }
      });

    setDisplayedLetters(displayedLetterObjects);
  }

  const init = () => {
    let newWordToGuess = getNewWord();
    setWordToGuess(newWordToGuess);

    generateDisplayedLetters(newWordToGuess);
  };

  useEffect(() => {
    init();
  }, [])

  const handleLetterSelected = (letter: string, index: number) => {
    if (wordToGuess.length > currentGuess.length) {
      let newGuess = currentGuess.concat(letter);
      setCurrentGuess(newGuess);

      let newDisplayedLetters = [...displayedLetters];
      newDisplayedLetters[index].guessed = true;
      setDisplayedLetters(newDisplayedLetters);
    }
  };

  const resetGuessedOnAllDisplayedLetters = () => {
    let newDisplayedLetters = [...displayedLetters];

    for (let key in newDisplayedLetters) {
      newDisplayedLetters[key].guessed = false;
    }

    setDisplayedLetters(newDisplayedLetters);
  };

  const handleClearGuess = () => {
    const newGuess = "";
    setCurrentGuess(newGuess);

    resetGuessedOnAllDisplayedLetters();
  };

  const handleResetGame = () => {
    const newGuess = "";
    setCurrentGuess(newGuess);
    init();
  };

  return (
    <div className="guess-the-animal-game">
      <div className="available-letters">
        <AvailableLetters letterSelected={handleLetterSelected} displayedLetters={displayedLetters} />
      </div>
      <div className="image-and-guess">
        <WordToGuessImage wordToGuess={wordToGuess} />
        <CurrentWordGuess wordToGuess={wordToGuess} currentGuess={currentGuess} />
        <div className="clear-enter-buttons">
          <button className="clear-button" onClick={handleClearGuess}>Clear</button>
          {currentGuess === wordToGuess
            ? <ConfettiButton handleResetGame={handleResetGame} />
            : currentGuess.length === wordToGuess.length
              ? <TryAgainButton handleClearGuess={handleClearGuess} />
              : <button className="enter-button-disabled" disabled={true}>Enter</button>
          }
        </div>
      </div>
    </div>
  );
};

export default GuessTheAnimal;
