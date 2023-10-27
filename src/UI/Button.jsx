import "./Button.css"
import { useEffect, useRef, useState } from "react"

function Button(props) {
    const value = props.value
    const focus = props.focus
    const className = props.className
    const isDisabled = props.isDisabled
    const callback = props.callback
    const dataIndexX = props.dataIndexX
    const dataIndexY = props.dataIndexY
    
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
        <button ref={buttonRef} className={className} disabled={isDisabled} onClick={onClick} data-index-x={dataIndexX} data-index-y={dataIndexY}>{value}</button>
    )
}

export default Button