import qr from '../assets/githubqr.png'
import "./AdBanner.css"
import LinkButton from '../UI/LinkButton'

function AdBanner() {

    return (
        <div className='ad-banner'>
            <h2 className='h2'>ИСПОЛНИТЕ СВОЮ МЕЧТУ! ПОДАРИТЕ СЕБЕ ПОЕДКУ В ГОРЫ!</h2>
            <img className='qr-img' src={qr} alt="qr code" />
            <p className='p'>Сканируйте QR-код или нажмите ОК</p>
            <LinkButton link="/promo" text="OK" focus={true}/>
        </div>
    )
}

export default AdBanner