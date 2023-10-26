import qr from '../assets/githubqr.png'
import "./PromoBanner.css"
import Keypad from './Keypad'
import Button from '../UI/Button'
import { useEffect, useReducer, useState } from 'react'


function PromoBanner() {

    const [phoneNumber, dispatchPhoneNumber] = useReducer(phoneNumberReducer, '')
    const [formatedPhoneNumber, setFormatedPhoneNumber] = useState('')
    
    function phoneNumberReducer(number, action) {
        switch (action.type) {
            case 'update': {
                if(number.length == 10) {
                    return number
                }
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

    function formatPhoneNumber(input) {
        let formattedNumber = '+7(___)___-__-__'
        for (let i = 0; i < input.length && i < 10; i++) {
            formattedNumber = formattedNumber.replace('_', input[i])
        }
        setFormatedPhoneNumber(formattedNumber)
    }

    useEffect(()=> {
        formatPhoneNumber(phoneNumber)
    }, [phoneNumber])
    

    return (
        <>
            <div className='promo-banner'>
                <h2 className='h2-promo'>Введите ваш номер мобильного телефона</h2>
                <input className='phone-input' type="tel" name='phone' placeholder='+7(___)___-__' value={formatedPhoneNumber} readOnly/>
                <p className='p-promo'>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
                <Keypad dispatcher={dispatchPhoneNumber}/>
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