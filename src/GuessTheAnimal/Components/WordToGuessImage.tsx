const WordToGuessImage = ({ wordToGuess }: { wordToGuess: string }) => {

    return (
        <div>
            <div>
            <img src={"/src/GuessTheAnimal/Images/" + wordToGuess} alt=""
                height="500" width="750" style={{ objectFit: "contain" }} />
            </div>
        </div>
    )
};

export default WordToGuessImage;
