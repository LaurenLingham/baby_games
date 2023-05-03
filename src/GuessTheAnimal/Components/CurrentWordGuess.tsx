import GuessedLetterTile from "./GuessedLetterTile";

const CurrentWordGuess = ({ wordToGuess, currentGuess }: { wordToGuess: string, currentGuess: string }) => {

  // const guessedLetters = [];
  // const correctGuess = guessedLetters.includes(l)

  // wordToGuess.split("").map((letter, index) => ())

  const letters: JSX.Element[] = [];
  for (let character of currentGuess) {
    letters.push(<GuessedLetterTile letter={character} />);
  }

  const numberOfAdditionalLetters = wordToGuess.length - currentGuess.length;
  for (let i = 0; i < numberOfAdditionalLetters; i++) {
      letters.push(<GuessedLetterTile letter=""/>);
  }

  return (
    <div className="current-guess">
      {...letters}
    </div>
  )
};

export default CurrentWordGuess;
