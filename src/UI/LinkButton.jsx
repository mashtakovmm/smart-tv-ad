import { Link } from "react-router-dom"
import "./Button.css"
import { useEffect, useRef } from "react"
import "./LinkButton.css"

function LinkButton(props) {
    const link = props.link
    const text = props.text
    const focus = props.focus

    const buttonRef = useRef(null);

    useEffect(()=>{
        if(focus) {
            buttonRef.current.focus()
            // document.addEventListener('keydown', handleKeyboard);
        }

        return () => {
            // document.removeEventListener('keydown', handleKeyboard);
        }
    },[])

    // focus on button on any key pressed
    // function handleKeyboard(e) {
    //     buttonRef.current.focus()
    // }

    return (
        <Link to={link}><button ref={buttonRef} className="link-button">{text}</button></Link>
    )
}

export default LinkButton