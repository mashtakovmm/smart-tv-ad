import "./Button.css"
import { useEffect, useRef, useState } from "react"

function Button(props) {
    const value = props.value
    const focus = props.focus
    const className = props.className
    const isDisabled = props.isDisabled
    const buttonType = props.buttonType ? props.buttonType : "default"
    let updateCallback, deleteCallback

    if(props.callbacks) {
        [updateCallback, deleteCallback] = props.callbacks
    }

    const [isActive, setIsActive] = useState(!isDisabled)
    const buttonRef = useRef(null);

    useEffect(()=>{
        if(focus) {
            buttonRef.current.focus()
        }
    },[])

    function onClick() {
        switch (buttonType){
            case "num": {
                updateCallback(value)
                break;
            }
            case "del": {
                deleteCallback()
                break;
            }
            default: {
                return
            }
        }
    }

    return (
        <button ref={buttonRef} className={className} disabled={!isActive} onClick={onClick}>{value}</button>
    )
}

export default Button