import qr from '../assets/githubqr.png'
import "./PromoBanner.css"
import Keypad from './Keypad'
import Button from '../UI/Button'
import { useReducer } from 'react'


function PromoBanner() {

    const [phoneNumber, dispatchPhoneNumber] = useReducer(phoneNumberReducer, '1111')

    function handleUpdateNumber(value) {
        dispatchPhoneNumber({ type: "update", value });
    }
    
    function handleDeleteNumber() {
        dispatchPhoneNumber({ type: "delete" });
    }
    
    function phoneNumberReducer(number, action) {
        switch (action.type) {
            case 'update': {
                console.log(number);
                return number + action.value
            }
            case 'delete': {
                return number.slice(0, -1);
            }
            default: {
                return number
            }
        }
    }
    

    return (
        <>
            <div className='promo-banner'>
                <h2 className='h2-promo'>Введите ваш номер мобильного телефона</h2>
                <input className='phone-input' type="tel" name='phone' placeholder='+7(___)-___-__' value={phoneNumber} />
                <p className='p-promo'>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
                <Keypad callbacks={[handleUpdateNumber, handleDeleteNumber]}/>
                <div>
                    <input type='checkbox' />
                    <label className='label-promo' htmlFor="">Согласие на обработку персональных данных</label>
                </div>
                <Button value="Подтвердить номер" className="accept-button" isDisabled={true} />
            </div>
            {/* TODO: fix qr code placement later */}
            {/* <img className='qr-img' src={qr} alt="qr code" /> */}
        </>
    )
}

export default PromoBanner