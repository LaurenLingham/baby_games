import { useEffect, useState } from "react";
import AvailableLetterTile from "./AvailableLetterTile";

const AvailableLetters = ({ wordToGuess, letterSelected }: { wordToGuess: string, letterSelected: (letter: string) => void }) => {

    const [availableLetters, setAvailableLetters] = useState<JSX.Element[]>([]);

    const createAvailableLetters = () => {
        let newLetters: JSX.Element[] = [];
        for (let character of wordToGuess) {
            newLetters.push(<AvailableLetterTile letter={character} letterSelected={letterSelected} />);
        }

        // const getAdditionalLetters = (): string => {
        //     const alphabet = "abcdefghijklmnopqrstuvwxyz";
        //     let result = "";
        //     for (let i = 0; i < (8 - wordToGuess.length); i++) {
        //         result += alphabet[Math.floor(Math.random() * alphabet.length)];
        //     }
        //     return result;
        // };
        // create a for loop to add letters to newLetters

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