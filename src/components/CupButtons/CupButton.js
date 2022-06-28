import bomb from "./icons/bomb.png"
import "./CupButton.css"
const CupButton = ({ icon, cupName }) => {
    return (
        <div className="cupButton">
            <img src={bomb} alt={cupName} id="icon" />
            <p className="cupName"> { cupName } </p>
        </div>
    )
}

export default CupButton;