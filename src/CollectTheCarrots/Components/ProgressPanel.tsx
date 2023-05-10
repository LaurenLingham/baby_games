import bunnyWithBasket from "../Images/bunny_basket.jpeg";
import bunnyWithCarrot from "../Images/bunny_carrot.jpeg"

const ProgressPanel = ({ collectedCarrots, handleSplashScreenReturn, handleResetGame }: { collectedCarrots: number, handleSplashScreenReturn: () => void, handleResetGame: () => void }) => {

    return (
        <div className="progress-panel">
            <button className="home-button" onClick={ handleSplashScreenReturn }>Back to Games</button>
            { collectedCarrots < 10
                ? <div>
                    <img src={ bunnyWithBasket } className="bunny-image" alt="" width="350px" />
                    <p>{ collectedCarrots } carrots collected</p>
                    <p>{ 10 - collectedCarrots } left to find</p>
                </div>
                : <div>
                    <img src={ bunnyWithCarrot } className="win-image" alt="" width="350px" />
                    <p>Well done! <br/> You found all of <br/> the carrots</p>
                    <button className="play-again-button" onClick={ handleResetGame }>Play again</button>
                </div>
            }
        </div>
    )
};

export default ProgressPanel;
