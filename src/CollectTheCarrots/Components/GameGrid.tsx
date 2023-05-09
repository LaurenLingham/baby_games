import { Box } from "../Container/CollectTheCarrots";
import Carrot from "./Carrot";

interface Carrot {
    boxId: number;
}

const GameGrid = ({ boxes, handleBoxClick }: { boxes: Box[], handleBoxClick: (boxId: number) => void }) => {

    return (
        <div className="game-grid">
            { boxes.map((box) => (
                <div className="box" onClick={() => handleBoxClick(box.id)} >
                    { box.hasCarrot && <Carrot rotation={box.carrotRotation} />}
                </div>
            ))}
        </div>
    )
};

export default GameGrid;
