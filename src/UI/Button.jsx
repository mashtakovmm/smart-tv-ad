import "./Button.css"
import { useEffect, useRef, useState } from "react"

function Button(props) {
    const value = props.value
    const focus = props.focus
    const className = props.className
    const isDisabled = props.isDisabled
    const Callback = props.callback

    const [isActive, setIsActive] = useState(!isDisabled)

    const buttonRef = useRef(null);

    useEffect(()=>{
        if(focus) {
            buttonRef.current.focus()
        }
    },[])

    return (
        <button ref={buttonRef} className={className} disabled={!isActive}>{value}</button>
    )
}

export default Button