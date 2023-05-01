import GuessedLetterTile from "./GuessedLetterTile";

const CurrentWordGuess = ({ wordToGuess, letterSelected }: { wordToGuess: string, letterSelected: (letter: string) => void }) => {

  // const guessedLetters = [];
  // const correctGuess = guessedLetters.includes(l)

  // wordToGuess.split("").map((letter, index) => ())

  return (
    <div>
      <GuessedLetterTile />
    </div>
  )
};

export default CurrentWordGuess;
