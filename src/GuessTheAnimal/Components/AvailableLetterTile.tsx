import Letter from "./Letter";

const AvailableLetterTile = ({ letter, letterSelected, guessed, index }: {
  letter: string, letterSelected: (letter: string, index: number) => void, guessed: boolean, index: number
}) => {
  const handleClick = () => {
    if (guessed) {
      return;
    }
    letterSelected(letter, index);
  };

  return (
    <>
      { !guessed
        ? <div className="letter-tile available-letter-tile" onClick={ handleClick }>
          <Letter letter={ letter } />
        </div>
        : <div className="letter-tile unavailable-letter-tile" onClick={ handleClick }>
          <Letter letter={ letter } />
        </div>
      }
    </>
  )
};

export default AvailableLetterTile;
