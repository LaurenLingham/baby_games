// import { useEffect, useState } from "react";
import AvailableLetterTile from "./AvailableLetterTile";

const AvailableLetters = ({ wordToGuess, letterSelected, isGuessCorrect }: { wordToGuess: string, letterSelected: (letter: string) => void, isGuessCorrect: boolean }) => {

    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const letters: JSX.Element[] = [];
    for (let character of wordToGuess) {
        if (alphabet.includes(character)) {
            alphabet = alphabet.replace(character, "");
        }
        letters.push(<AvailableLetterTile letter={character} letterSelected={letterSelected} />);
    }

    const numberOfAdditionalLetters = 8 - wordToGuess.length;
    const usedLetters = new Set(letters.map((char) => char.props.letter));
    for (let i = 0; i < numberOfAdditionalLetters; i++) {
        let additionalLetter;
        do {
            additionalLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        } while (usedLetters.has(additionalLetter));
        usedLetters.add(additionalLetter);
        letters.push(<AvailableLetterTile letter={additionalLetter} letterSelected={letterSelected} />);
    }
    
    const scramble = (inputElements: JSX.Element[]): JSX.Element[] => {
        const elements = [...inputElements];
        for (let i = elements.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [elements[i], elements[j]] = [elements[j], elements[i]];
        }
        return elements;
    };

    const scrambledLetters = scramble(letters);

    return (
        <div className="letters-container">
            {...scrambledLetters}
        </div>
    )
};

export default AvailableLetters;