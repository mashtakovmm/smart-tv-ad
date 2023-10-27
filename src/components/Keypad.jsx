import Button from "../UI/Button"
import "./Keypad.css"

function Keypad(props) {

    const dispatcher = props.dispatcher

    return (
        <div className="keypad-container">
            <Button value={1} className="number-button" callback={()=>dispatcher({type:'update', value:1})} dataIndexX="0" dataIndexY="0"></Button>
            <Button value={2} className="number-button" callback={()=>dispatcher({type:'update', value:2})} dataIndexX="1" dataIndexY="0"></Button>
            <Button value={3} className="number-button" callback={()=>dispatcher({type:'update', value:3})} dataIndexX="2" dataIndexY="0"></Button>
            <Button value={4} className="number-button" callback={()=>dispatcher({type:'update', value:4})} dataIndexX="0" dataIndexY="1"></Button>
            <Button value={5} className="number-button" callback={()=>dispatcher({type:'update', value:5})} dataIndexX="1" dataIndexY="1"></Button>
            <Button value={6} className="number-button" callback={()=>dispatcher({type:'update', value:6})} dataIndexX="2" dataIndexY="1"></Button>
            <Button value={7} className="number-button" callback={()=>dispatcher({type:'update', value:7})} dataIndexX="0" dataIndexY="2"></Button>
            <Button value={8} className="number-button" callback={()=>dispatcher({type:'update', value:8})} dataIndexX="1" dataIndexY="2"></Button>
            <Button value={9} className="number-button" callback={()=>dispatcher({type:'update', value:9})} dataIndexX="2" dataIndexY="2"></Button>
            <Button value="Стереть" className="delete-button" callback={()=>dispatcher({type:'delete'})} dataIndexX="0" dataIndexY="3"></Button>
            <Button value={0} className="number-button" callback={()=>dispatcher({type:'update', value:0})} dataIndexX="1" dataIndexY="3"></Button>
        </div>
    )
}

export default Keypad