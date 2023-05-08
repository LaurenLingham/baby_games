import { useState, useEffect } from "react";
import Box from "./Box";
import Carrot from "./Carrot";

interface Box {
    id: number;
    hasCarrot: boolean;
}

interface Carrot {
    boxId: number;
}

const GameGrid = () => {

    const [boxes, setBoxes] = useState<Box[]>([]);
    const [carrots, setCarrots] = useState<Carrot[]>([]);

    useEffect(() => {
        const newBoxes = Array.from({ length: 25 }, (_, index) => ({
            id: index,
            hasCarrot: false,
        }));
        const randomCarrotIndexes = Array.from({ length: 8 }, () =>
            Math.floor(Math.random() * 25)
        );
        const newCarrots = randomCarrotIndexes.map((index) => ({
            boxId: index
        }));
        newCarrots.forEach((carrot) => {
            const boxIndex = carrot.boxId;
            newBoxes[boxIndex].hasCarrot = true;
        });
        setBoxes(newBoxes);
        setCarrots(newCarrots);
    }, []);

    const handleBoxClick = (boxId: number) => {
        const boxIndex = boxId;
        if (boxes[boxIndex].hasCarrot) {
            const newCarrots = carrots.filter((carrot) => carrot.boxId !== boxId);
            setCarrots(newCarrots);

            const newBoxes = [...boxes];
            newBoxes[boxIndex].hasCarrot = false;
            setBoxes(newBoxes);
        }
    };

    return (
        <div>
            {boxes.map((box) => (
                <div onClick={() => handleBoxClick(box.id)} >
                    Box
                    {box.hasCarrot && <Carrot />}
                </div>
            ))}
        </div>
    )
};

export default GameGrid;
