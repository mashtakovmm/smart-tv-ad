import "./Button.css"
import { useEffect, useRef, useState } from "react"

function Button(props) {
    const value = props.value
    const focus = props.focus
    const className = props.className
    const isDisabled = props.isDisabled
    const callback = props.callback
    
    const [isActive, setIsActive] = useState(!isDisabled)
    const buttonRef = useRef(null);

    useEffect(()=>{
        if(focus) {
            buttonRef.current.focus()
        }
    },[])

    function onClick() {
        if(callback) {
            callback()
        }
    }

    return (
        <button ref={buttonRef} className={className} disabled={!isActive} onClick={onClick}>{value}</button>
    )
}

export default Button