import "./CollectTheCarrots.css";
import GameGrid from "../Components/GameGrid";
import ProgressPanel from "../Components/ProgressPanel";
import { useState } from "react";

const CollectTheCarrots = ({ handleSplashScreenReturn }: { handleSplashScreenReturn: () => void }) => {

  const [collectedCarrots, setCollectedCarrots] = useState(0);

  const increaseCollectedCarrots = () => {
    setCollectedCarrots(collectedCarrots + 1);
  }

  return (
    <div className="collect-the-carrots-game">
      <div className="background-image">
        <GameGrid increaseCollectedCarrots={ increaseCollectedCarrots } />
      </div>
      <ProgressPanel collectedCarrots={ collectedCarrots } handleSplashScreenReturn={ handleSplashScreenReturn } />
    </div>
  )
};

export default CollectTheCarrots;
