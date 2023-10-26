
import AdBanner from "../components/AdBanner"
import Video from "../components/Video"
import videoSrc from "../assets/videoBG1.mp4"
function AdVideo() {

    return (
        <div>
            <AdBanner timeout={5000}/>
            <Video src={videoSrc} />
        </div>
    )
}

export default AdVideo