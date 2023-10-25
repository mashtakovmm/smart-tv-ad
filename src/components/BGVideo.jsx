import videoBG1 from "../assets/videoBG1.mp4"
import AdBanner from "./AdBanner"
import './AdVideo.css'

function AdVideo() {
    
    return(
        <div>
            <AdBanner></AdBanner>
            <video src={videoBG1} autoPlay muted loop></video>
        </div>
    )
}

export default AdVideo