import { useState, useEffect } from "react";
import Box from "./Box";
import Carrot from "./Carrot";

interface Box {
    id: number;
    hasCarrot: boolean;
    carrotRotation: number;
}

interface Carrot {
    boxId: number;
}

const GameGrid = ({ increaseCollectedCarrots }: { increaseCollectedCarrots: () => void }) => {
    const [boxes, setBoxes] = useState<Box[]>([]);

    useEffect(() => {
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
    }, []);

    const handleBoxClick = (boxId: number) => {
        const boxIndex = boxId;
        if (boxes[boxIndex].hasCarrot) {
            const newBoxes = [...boxes];
            newBoxes[boxIndex].hasCarrot = false;
            setBoxes(newBoxes);

            increaseCollectedCarrots();
        }
    };

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
