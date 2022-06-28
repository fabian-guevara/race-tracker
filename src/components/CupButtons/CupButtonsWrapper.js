import CupButton from "./CupButton";
import "./CupButtonWrapper.css"
const CupButtonsWrapper = () => {


    return (
       <div className="buttonWrapper">
            <CupButton icon={"./icons/bomb.png"} cupName={"MUSHROOM CUP"} />
            <CupButton icon={"./icons/bomb.png"} cupName={"MUSHROOM CUP"} />
            <CupButton icon={"./icons/bomb.png"} cupName={"MUSHROOM CUP"} />
            <CupButton icon={"./icons/bomb.png"} cupName={"MUSHROOM CUP"} />

       </div>
    )
}

export default CupButtonsWrapper;