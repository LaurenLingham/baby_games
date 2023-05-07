import AvailableLetterTile from "./AvailableLetterTile";

const AvailableLetters = ({
    letterSelected,
    displayedLetters
}: {
    letterSelected: (letter: string, index: number) => void,
    displayedLetters: { letter: string, guessed: boolean }[]
}) => {
    const availableLetterTiles: JSX.Element[] = displayedLetters
        .map((displayedLetter, i) =>
            <AvailableLetterTile
                letter={displayedLetter.letter}
                letterSelected={letterSelected}
                guessed={displayedLetter.guessed}
                index={i}
            />);

    return (
        <div className="letters-container">
            {...availableLetterTiles}
        </div>
    )
};

export default AvailableLetters;
