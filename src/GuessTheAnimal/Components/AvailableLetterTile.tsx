import Letter from "./Letter";

const AvailableLetterTile = ({ letter, letterSelected }: { letter: string, letterSelected: (letter: string) => void }) => {

  const handleClick = () => {
    letterSelected(letter);
  };

  return (
    <div onClick={handleClick}>
      <Letter letter={letter}/>
    </div>
  )
};

export default AvailableLetterTile;
