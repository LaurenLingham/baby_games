import Lottie from "lottie-react";
import purpleStars from "./purpleStars.json";

const SplashScreen = (
    { handleGuessTheAnimalGameSelected, handleCarrotGameSelected }: 
    { handleGuessTheAnimalGameSelected: () => void, handleCarrotGameSelected: () => void }) => {

    const onAnimalButtonClicked = () => {
        handleGuessTheAnimalGameSelected();
    };

    const onCarrotButtonClicked = () => {
        handleCarrotGameSelected();
    };

    return (
    <>
        <div> 
            <Lottie 
                animationData={purpleStars}
                loop={true}
                style={{width: "100%", height: "100vh"}}/>
            <button onClick={onAnimalButtonClicked}>Play guess the animal game</button>
            <button onClick={onCarrotButtonClicked}>Play collect the carrots game</button>
        </div>
    </>);
}

export default SplashScreen;
