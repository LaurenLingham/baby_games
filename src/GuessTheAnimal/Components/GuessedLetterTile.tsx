import Letter from "./Letter";

const GuessedLetterTile = ({ letter }: { letter: string }) => {
    return (
        <div className="letter-tile guessed-letter-tile">
            <Letter letter={ letter } />
        </div>
    )
};

export default GuessedLetterTile;