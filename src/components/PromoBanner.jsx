import qr from '../assets/githubqr.png'
import "./PromoBanner.css"

function PromoBanner() {
    return (
        <div className='promo-banner'>
            <h2 className='h2'>Введите ваш номер мобильного телефона</h2>
            <p className='p'>Сканируйте QR-код или нажмите ОК</p>
            <button>ОК</button>
            {/* TODO: fix qr code placement later */}
            <img className='qr-img' src={qr} alt="qr code" />
        </div>
    )
}

export default PromoBanner