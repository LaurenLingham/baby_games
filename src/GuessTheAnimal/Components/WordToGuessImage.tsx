const WordToGuessImage = ({ wordToGuess }: { wordToGuess: string }) => {

    return (
        <div>
            {wordToGuess}
            <div>
                <img src={"/src/GuessTheAnimal/Images/" + wordToGuess} alt=""
                    height="400px" width="700px" style={{ objectFit: "contain" }} />
            </div>
        </div>
    )
};

export default WordToGuessImage;
