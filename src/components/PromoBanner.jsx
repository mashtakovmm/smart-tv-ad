import qr from '../assets/githubqr.png'
import checkmark from '../assets/check.png'
import "./PromoBanner.css"
import Keypad from './Keypad'
import Button from '../UI/Button'
import { useEffect, useReducer, useState } from 'react'
import { Link } from 'react-router-dom'


function PromoBanner() {

    const [phoneNumber, dispatchPhoneNumber] = useReducer(phoneNumberReducer, '')
    const [formatedPhoneNumber, setFormatedPhoneNumber] = useState('')
    const [checked, setChecked] = useState(false)
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [accepted, setAccepted] = useState(false)

    function phoneNumberReducer(number, action) {
        switch (action.type) {
            case 'update': {
                if (number.length == 10) {
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

    useEffect(() => {
        formatPhoneNumber(phoneNumber)
    }, [phoneNumber])

    useEffect(() => {
        if (checked && phoneNumber.length == 10) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }

    }, [checked, phoneNumber])

    function handleCheckbox() {
        setChecked(!checked)
    }

    function handleSendInfo() {
        if (!buttonDisabled) {
            setAccepted(true)
        }
    }


    return (
        <>

            {!accepted ? (
                <div className='promo-banner'>
                    <h2 className='h2-promo'>Введите ваш номер мобильного телефона</h2>
                    <input className='phone-input' type="tel" name='phone' placeholder='+7(___)___-__-__' value={formatedPhoneNumber} readOnly />
                    <p className='p-promo'>и с Вами свяжется наш менеджер для дальнейшей консультации</p>
                    <Keypad dispatcher={dispatchPhoneNumber} />
                    <div className='checkbox-container'>
                        <div className="checkbox" onClick={handleCheckbox}>{checked && <img style={{ paddingTop: "6px" }} src={checkmark} />}</div>
                        <label className='label-promo' htmlFor="">Согласие на обработку персональных данных</label>
                    </div>
                    <Button value="Подтвердить номер" className="accept-button" isDisabled={buttonDisabled} callback={handleSendInfo} />
                </div>
            ) : (
                <div className='promo-banner' style={{padding:"48px 46px;"}}>
                    <div className='accepted-div'>
                        <h1 className='accepted-h1'>ЗАЯВКА ПРИНЯТА</h1>
                        <div>
                            <p className='p-accepted'>Держите телефон под рукой.</p>
                            <p className='p-accepted'>Скоро с Вами свяжется наш менеджер.</p>
                        </div>
                    </div>
                </div>
            )}




            {/* absolute components */}
            <Link to={"/"}><Button value={"✕"} className="exit-button" /></Link>
            <div className='qr-container'>
                <span className='qr-span'>Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</span>
                <img className='qr-img' src={qr} alt="qr code" />
            </div>

        </>
    )
}

export default PromoBanner