import { useEffect, useState } from "react";
import AvailableLetterTile from "./AvailableLetterTile";

const AvailableLetters = ({ wordToGuess }: { wordToGuess: string }) => {

    const [availableLetters, setAvailableLetters] = useState<JSX.Element[]>([]);

    const createAvailableLetters = () => {
        let newLetters: JSX.Element[] = [];
        for (let character of wordToGuess) {
            newLetters.push(<AvailableLetterTile letter={character} />);
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