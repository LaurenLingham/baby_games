// import styles from Letter.css

const LetterTile = ({letter}: {letter: string}) => {

    // const onClick = (e) => {
    //   handleClick(e);
    // }
  
    return (
    <span className="letter">
      {letter}
    </span>)
  };
  
  export default LetterTile;
