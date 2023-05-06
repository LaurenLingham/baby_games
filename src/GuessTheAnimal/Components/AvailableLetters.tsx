import { useEffect, useState } from "react";
import AvailableLetterTile from "./AvailableLetterTile";

const AvailableLetters = ({ wordToGuess, letterSelected }: { wordToGuess: string, letterSelected: (letter: string) => void }) => {

    const [displayedLetters, setDisplayedLetters] = useState("");

    useEffect(() => {
        generateDisplayedLetters();
    }, [wordToGuess]);

    const generateDisplayedLetters = () => {
        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        let letters: string = "";
        for (let character of wordToGuess) {
            if (alphabet.includes(character)) {
                alphabet = alphabet.replace(character, "");
            }
            letters += character;
        }

        const numberOfAdditionalLetters = 8 - wordToGuess.length;
        const usedLetters = new Set(wordToGuess);
        console.log(usedLetters);
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

        setDisplayedLetters(scrambledLetters);
    }

    const availableLetterTiles: JSX.Element[] = displayedLetters
        .split("")
        .map(character => <AvailableLetterTile letter={character} letterSelected={letterSelected} />)

    return (
        <div className="letters-container">
            {...availableLetterTiles}
        </div>
    )
};

export default AvailableLetters;
