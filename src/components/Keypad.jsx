import Button from "../UI/Button"
import "./Keypad.css"

function Keypad(props) {

    const dispatcher = props.dispatcher

    return (
        <div className="keypad-container">
            <Button value={1} className="number-button" callback={()=>dispatcher({type:'update', value:1})}></Button>
            <Button value={2} className="number-button" callback={()=>dispatcher({type:'update', value:2})}></Button>
            <Button value={3} className="number-button" callback={()=>dispatcher({type:'update', value:3})}></Button>
            <Button value={4} className="number-button" callback={()=>dispatcher({type:'update', value:4})}></Button>
            <Button value={5} className="number-button" callback={()=>dispatcher({type:'update', value:5})}></Button>
            <Button value={6} className="number-button" callback={()=>dispatcher({type:'update', value:6})}></Button>
            <Button value={7} className="number-button" callback={()=>dispatcher({type:'update', value:7})}></Button>
            <Button value={8} className="number-button" callback={()=>dispatcher({type:'update', value:8})}></Button>
            <Button value={9} className="number-button" callback={()=>dispatcher({type:'update', value:9})}></Button>
            <Button value="Стереть" className="delete-button" callback={()=>dispatcher({type:'delete'})}></Button>
            <Button value={0} className="number-button" callback={()=>dispatcher({type:'update', value:0})}></Button>
        </div>
    )
}

export default Keypad