import { useEffect, useState } from "react";
import AvailableLetterTile from "./AvailableLetterTile";

const AvailableLetters = ({ wordToGuess, letterSelected }: { wordToGuess: string, letterSelected: (letter: string) => void }) => {

    const [availableLetters, setAvailableLetters] = useState<JSX.Element[]>([]);

    const createAvailableLetters = () => {
        let newLetters: JSX.Element[] = [];
        for (let character of wordToGuess) {
            newLetters.push(<AvailableLetterTile letter={character} letterSelected={letterSelected} />);
        }

        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        const numberOfAdditionalLetters = 8 - wordToGuess.length;
        for (let i = 0; i < numberOfAdditionalLetters; i++) {
            const additionalLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
            newLetters.push(<AvailableLetterTile letter={additionalLetter} letterSelected={letterSelected} />);
        }

        setAvailableLetters(newLetters);
    };

    useEffect(() => {
        createAvailableLetters();
    }, [wordToGuess]);

    return (
        <>
            {...availableLetters}
        </>
    )
};

export default AvailableLetters;