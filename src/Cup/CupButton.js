import bomb from "./icons/bomb.png"
import "./CupButton.css"
const CupButton = ({ icon, cupName }) => {

    console.log(icon)
    return (
        <div className="cupButton">
            <img src={bomb} alt={cupName} />
            <p className="cupName"> { cupName } </p>
        </div>
    )
}

export default CupButton;