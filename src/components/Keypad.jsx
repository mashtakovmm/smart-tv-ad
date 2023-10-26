import Button from "../UI/Button"
import "./Keypad.css"

function Keypad(props) {

    return (
        <div className="keypad-container">
            <Button value={1} className="number-button" buttonType="num" callbacks={props.callbacks}></Button>
            <Button value={2} className="number-button" buttonType="num" callbacks={props.callbacks}></Button>
            <Button value={3} className="number-button" buttonType="num" callbacks={props.callbacks}></Button>
            <Button value={4} className="number-button" buttonType="num" callbacks={props.callbacks}></Button>
            <Button value={5} className="number-button" buttonType="num" callbacks={props.callbacks}></Button>
            <Button value={6} className="number-button" buttonType="num" callbacks={props.callbacks}></Button>
            <Button value={7} className="number-button" buttonType="num" callbacks={props.callbacks}></Button>
            <Button value={8} className="number-button" buttonType="num" callbacks={props.callbacks}></Button>
            <Button value={9} className="number-button" buttonType="num" callbacks={props.callbacks}></Button>
            <Button value="Стереть" className="delete-button" buttonType="del" callbacks={props.callbacks}></Button>
            <Button value={0} className="number-button" buttonType="num"  callbacks={props.callbacks}></Button>
        </div>
    )
}

export default Keypad