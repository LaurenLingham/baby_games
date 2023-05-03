import catImage from "../Images/cat.jpg";
import cowImage from "../Images/cow.jpg";
import dogImage from "../Images/dog.jpg";
import duckImage from "../Images/duck.jpg";
import frogImage from "../Images/frog.jpg";
import owlImage from "../Images/owl.jpg";
import pandaImage from "../Images/panda.jpg";
import pigImage from "../Images/pig.jpg";
import sheepImage from "../Images/sheep.jpg";
import tigerImage from "../Images/tiger.jpg";

const WordToGuessImage = ({ wordToGuess }: { wordToGuess: string }) => {

    let imageToUse : string;
    switch(wordToGuess) {
        case "CAT":
            imageToUse = catImage;
            break;
        case "COW":
            imageToUse = cowImage;
            break;
        case "DOG":
            imageToUse = dogImage;
            break;
        case "DUCK":
            imageToUse = duckImage;
            break;
        case "FROG":
            imageToUse = frogImage;
            break;
        case "OWL":
            imageToUse = owlImage;
            break;
        case "PANDA":
            imageToUse = pandaImage;
            break;
        case "PIG":
            imageToUse = pigImage;
            break;
        case "SHEEP":
            imageToUse = sheepImage;
            break;
        case "TIGER":
            imageToUse = tigerImage;
            break;
        default:
            imageToUse = "";
            break;
    }

    return (
        <div>
            {wordToGuess}
            <div>
                <img src={imageToUse} alt=""
                    height="400px" width="700px" style={{ objectFit: "contain" }} />
            </div>
        </div>
    )
};

export default WordToGuessImage;
