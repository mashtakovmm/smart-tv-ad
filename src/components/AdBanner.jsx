import qr from '../assets/youtubeqr.png'
import "./AdBanner.css"

function AdBanner() {
    return (
        <div className='ad-banner'>
            <h2 className='h2'>ИСПОЛНИТЕ СВОЮ МЕЧТУ! ПОДАРИТЕ СЕБЕ ПОЕДКУ В ГОРЫ!</h2>
            <img className='qr-img' src={qr} alt="qr code" />
            <p className='p'>Сканируйте QR-код или нажмите ОК</p>
            <button>ОК</button>
        </div>
    )
}

export default AdBanner