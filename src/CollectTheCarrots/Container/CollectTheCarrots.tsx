import "./CollectTheCarrots.css";
import GameGrid from "../Components/GameGrid";
import ProgressPanel from "../Components/ProgressPanel";

const CollectTheCarrots = () => {
  return (
    <div className="collect-the-carrots-game">
        <GameGrid />
        <ProgressPanel />
    </div>
  )
};

export default CollectTheCarrots;
