import qr from '../assets/githubqr.png'
import "./AdBanner.css"
import Button from '../UI/Button'
import { Link } from 'react-router-dom'

function AdBanner() {

    return (
        <div className='ad-banner'>
            <h2 className='h2'>ИСПОЛНИТЕ СВОЮ МЕЧТУ! ПОДАРИТЕ СЕБЕ ПОЕДКУ В ГОРЫ!</h2>
            <img className='qr-img' src={qr} alt="qr code" />
            <p className='p'>Сканируйте QR-код или нажмите ОК</p>
            <Link to={"/promo"}><Button link="/promo" value="OK" focus={true} className="link-button"/></Link>
        </div>
    )
}

export default AdBanner