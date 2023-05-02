import GuessedLetterTile from "./GuessedLetterTile";

const CurrentWordGuess = ({ wordToGuess, currentGuess }: { wordToGuess: string, currentGuess: string }) => {

  // const guessedLetters = [];
  // const correctGuess = guessedLetters.includes(l)

  // wordToGuess.split("").map((letter, index) => ())

  // const letters: JSX.Element[] = [];
  // for (let character of currentGuess) {
  //   letters.push(<GuessedLetterTile letter={character} />);
  // }

  return (
    <div>
      <GuessedLetterTile />
    </div>
  )
};

export default CurrentWordGuess;
