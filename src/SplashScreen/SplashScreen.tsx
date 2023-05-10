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
            <ParticlesBackground />
            <Lottie className="stars-animation" animationData={purpleStars} loop={true} />
            <div className="splash-buttons">
                <div className="game-link carrot-game" onClick={ onCarrotButtonClicked}>
                    <img src={ carrotGame } alt="" className="game-image" />
                    <p>Collect the Carrots</p>
                </div>
                <div className="game-link animal-game" onClick={ onAnimalButtonClicked }>
                    <img src={ animalGame } alt="" className="game-image" />
                    <p>Guess the Animal</p>
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;

