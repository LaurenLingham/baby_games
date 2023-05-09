import { useState } from "react";
import GuessTheAnimal from "./GuessTheAnimal/Container/GuessTheAnimal";
import SplashScreen from "./SplashScreen";
import CollectTheCarrots from "./CollectTheCarrots/Container/CollectTheCarrots";

function App() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const handleSplashScreenReturn = () => {
    setCurrentScreen(0);
  }

  const handleGuessTheAnimalGameSelected = () => {
    setCurrentScreen(1);
  }

  const handleCollectTheCarrotsGameSelected = () => {
    setCurrentScreen(2);
  }

  let screenToRender;

  switch (currentScreen) {
    case 0:
      screenToRender = <SplashScreen 
        handleGuessTheAnimalGameSelected={ handleGuessTheAnimalGameSelected } 
        handleCollectTheCarrotsGameSelected={ handleCollectTheCarrotsGameSelected } />;
      break;
    case 1:
      screenToRender = <GuessTheAnimal handleSplashScreenReturn={ handleSplashScreenReturn } />;
      break;
    case 2:
      screenToRender= <CollectTheCarrots handleSplashScreenReturn={ handleSplashScreenReturn } />;
      break;
  }

  return (
    <>
      { screenToRender }
    </>
  )
};

export default App;
