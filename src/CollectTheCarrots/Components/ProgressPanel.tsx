import bunnyWithBasket from "../Images/bunny_basket.jpeg";
import bunnyWithCarrot from "../Images/bunny_carrot.jpeg"

const ProgressPanel = ({ collectedCarrots, handleSplashScreenReturn }: { collectedCarrots: number, handleSplashScreenReturn: () => void }) => {

    return (
        <div className="progress-panel">
            <button className="home-button" onClick={handleSplashScreenReturn}>Back to Games</button>
            {collectedCarrots < 10
                ? <div>
                    <img src={bunnyWithBasket} alt="" width="350px" />
                    <p>{collectedCarrots} carrots collected</p>
                    <p>{10 - collectedCarrots} left to find</p>
                </div>
                : <div>
                    <img src={bunnyWithCarrot} alt="" width="350px" />
                    <p>Congratulations! <br /> You found all of the carrots</p>
                    <button className="play-again-button" onClick={handleSplashScreenReturn}>Play again</button>
                </div>
            }
        </div>
    )
};

export default ProgressPanel;
