import bunnyWithBasket from "../Images/bunny_basket.jpeg";

const ProgressPanel = ({ collectedCarrots }: { collectedCarrots: number }) => {

    return (
        <div className="progress-panel">
            <img src={ bunnyWithBasket } alt="" className="bunny-with-basket" width="350px" />
            <p>{ collectedCarrots } carrots collected</p>
            { collectedCarrots < 10
            ? <p>{ 10 - collectedCarrots } left to find</p>
            : <div>
                <p>Congratulations! <br/> You found all of the carrots!</p>
                <button className="play-again-button">Play again</button>
            </div>
            }
        </div>
    )
};

export default ProgressPanel;
