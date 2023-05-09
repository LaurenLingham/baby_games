import "./CollectTheCarrots.css";
import GameGrid from "../Components/GameGrid";
import ProgressPanel from "../Components/ProgressPanel";
import { useEffect, useState } from "react";

export interface Box {
  id: number;
  hasCarrot: boolean;
  carrotRotation: number;
}

const CollectTheCarrots = ({ handleSplashScreenReturn }: { handleSplashScreenReturn: () => void }) => {

  const [collectedCarrots, setCollectedCarrots] = useState(0);
  const [boxes, setBoxes] = useState<Box[]>([]);

  const init = () => {
    const newBoxes = Array.from({ length: 25 }, (_, index) => ({
      id: index,
      hasCarrot: false,
      carrotRotation: Math.floor(Math.random() * 360)
    }));

    let randomCarrotIndexes: number[] = [];
    for (let i = 0; i < 10; i++) {
      let newCarrotIndex;
      do {
        newCarrotIndex = Math.floor(Math.random() * 25);
      }
      while (randomCarrotIndexes.includes(newCarrotIndex));
      randomCarrotIndexes.push(newCarrotIndex);
    }

    randomCarrotIndexes.forEach((index) => {
      newBoxes[index].hasCarrot = true;
    });

    setBoxes(newBoxes);
    setCollectedCarrots(0);
  };

  useEffect(() => {
    init();
  }, []);

  const handleBoxClick = (boxId: number) => {
    const boxIndex = boxId;
    if (boxes[boxIndex].hasCarrot) {
      const newBoxes = [...boxes];
      newBoxes[boxIndex].hasCarrot = false;
      setBoxes(newBoxes);

      setCollectedCarrots(collectedCarrots + 1);
    }
  };

  return (
    <div className="collect-the-carrots-game">
      <div className="background-image">
        <GameGrid boxes={ boxes } handleBoxClick={ handleBoxClick } />
      </div>
      <ProgressPanel collectedCarrots={ collectedCarrots } handleSplashScreenReturn={ handleSplashScreenReturn } handleResetGame={ init } />
    </div>
  )
};

export default CollectTheCarrots;
