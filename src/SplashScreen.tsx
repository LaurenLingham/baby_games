import "./SplashScreen.css";
import Lottie from "lottie-react";
import purpleStars from "./purpleStars.json";
import ParticlesBackground from "./ParticlesBackground";
import animalGame from "./Images/animal_game.jpeg";
import carrotGame from "./Images/carrot_game.jpeg";

const SplashScreen = (
    { handleGuessTheAnimalGameSelected, handleCollectTheCarrotsGameSelected }:
        { handleGuessTheAnimalGameSelected: () => void, handleCollectTheCarrotsGameSelected: () => void }) => {

    const onAnimalButtonClicked = () => {
        handleGuessTheAnimalGameSelected();
    };

    const onCarrotButtonClicked = () => {
        handleCollectTheCarrotsGameSelected();
    };

    return (
        <div className="splash-screen">
            {/* <ParticlesBackground /> */}
            <Lottie className="animation" animationData={purpleStars} loop={true} />
            <div className="splash-buttons">
                <div className="game-link animal-game">
                    <img src={ animalGame } alt="" className="game-image" />
                    <p>Guess The Animal</p>
                    <button onClick={ onAnimalButtonClicked }>Play</button>
                </div>
                <div className="game-link carrot-game">
                    <img src={ carrotGame } alt="" className="game-image" />
                    <p>Collect The Carrots</p>
                    <button onClick={ onCarrotButtonClicked }>Play</button>
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;

