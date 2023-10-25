import "./Video.css"

function Video(props) {
    const src = props.src
    return (
        <video src={src} autoPlay muted loop></video>
    )
}

export default Video