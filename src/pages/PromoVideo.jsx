
import PromoBanner from "../components/PromoBanner"
import Video from "../components/Video"
import videoSrc from "../assets/videoBG2.mp4"
function PromoVideo() {

    return (
        <div>
            <PromoBanner />
            <Video src={videoSrc} />
        </div>
    )
}

export default PromoVideo