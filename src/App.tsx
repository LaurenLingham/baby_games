import { useState } from "react";
import GuessTheAnimal from "./GuessTheAnimal/Containers/GuessTheAnimal";
import SplashScreen from "./SplashScreen";

function App() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const handleGuessTheAnimalGameSelected = () => {
    setCurrentScreen(1);
  }

  const handleCarrotGameSelected = () => {
    setCurrentScreen(2);
  }

  let screenToRender;

  switch (currentScreen) {
    case 0:
      screenToRender = <SplashScreen 
        handleGuessTheAnimalGameSelected={handleGuessTheAnimalGameSelected} 
        handleCarrotGameSelected={handleCarrotGameSelected} />;
      break;
    case 1:
      screenToRender = <GuessTheAnimal />;
      break;
  }

  return (
    <>
      {screenToRender}
    </>
  )
};

export default App;
