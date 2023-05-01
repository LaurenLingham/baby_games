// import { useEffect, useState } from "react";
import AvailableLetterTile from "./AvailableLetterTile";

const AvailableLetters = ({ wordToGuess, letterSelected }: { wordToGuess: string, letterSelected: (letter: string) => void }) => {

    const letters: JSX.Element[] = [];
    for (let character of wordToGuess) {
        letters.push(<AvailableLetterTile letter={character} letterSelected={letterSelected} />);
    }

    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const numberOfAdditionalLetters = 8 - wordToGuess.length;
    for (let i = 0; i < numberOfAdditionalLetters; i++) {
        const additionalLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
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
        <>
            {...scrambledLetters}
        </>
    )
};

export default AvailableLetters;