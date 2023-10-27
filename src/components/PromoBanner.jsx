import qr from '../assets/githubqr.png'
import checkmark from '../assets/check.png'
import "./PromoBanner.css"
import Keypad from './Keypad'
import Button from '../UI/Button'
import { useEffect, useReducer, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function PromoBanner() {

    const [phoneNumber, dispatchPhoneNumber] = useReducer(phoneNumberReducer, '')
    const [formatedPhoneNumber, setFormatedPhoneNumber] = useState('')
    const [checked, setChecked] = useState(false)
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [accepted, setAccepted] = useState(false)

    const containerRef = useRef(null)

    const redirect = useNavigate()

    let timeoutId
    const timeout = 10_000

    // keyboard navigation

    const UIMatrix = [
        [[0, 0], [1, 0], [2, 0], [3, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 3], [1, 3]],
        [[0, 4]],
        [[0, 5]]
    ];
    let currentSelectedUI = [0, 0]
    let y = 0
    let x = 0

    useEffect(() => {
        SelectByIndex(currentSelectedUI[0].toString(), currentSelectedUI[1].toString())
        document.addEventListener("keydown", handleKeyboard)
    }, [])

    function handleKeyboard(e) {
        // check for idling
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            redirect('/smart-tv-ad')
        }, timeout);
        // handle the number
        const num = parseInt(e.key, 10);
        if (num >= 0 && num <= 9) {
            dispatchPhoneNumber({ type: 'update', value: num })
        }
        let prevState = [y, x]
        switch (e.key) {
            // handle backspace
            case "Backspace": {
                dispatchPhoneNumber({ type: 'delete' })
            }
            // handle navigation
            case "ArrowLeft": {
                y--
                break
            }
            case "ArrowRight": {
                y++
                break
            }
            case "ArrowDown": {
                if (y == 2 && x == 2) {
                    y = 1
                    x = 3
                    break
                } else if (y == 1 && x == 2) {
                    y = 0
                    x = 3
                    break
                } else if (y == 1 && x == 3) {
                    x = 4
                    y = 0
                    break
                }
                x++
                break
            }
            case "ArrowUp": {
                if (y == 1 && x == 3) {
                    x = 2
                    y = 2
                    break
                }
                x--
                break
            }
        }
        if (x >= 0 && x < UIMatrix.length && y >= 0 && y < UIMatrix[x].length) {
            SelectByIndex(y.toString(), x.toString()) ? null : [y, x] = prevState
        } else {
            [y, x] = prevState
        }
    }

    function SelectByIndex(indexX, indexY) {
        // check for idling
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            redirect('/smart-tv-ad')
        }, timeout);
        const selector = `[data-index-x="${indexX}"][data-index-y="${indexY}"]`;
        const element = document.querySelector(selector);
        if (element) {
            if (!element.disabled) {
                element.focus();
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }
    // keyboard navigation end

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

    function handleCheckbox(e) {
        if (e.key === "Enter" || e.key === " " || (e.button === 0)) {
            console.log(e.key);
            setChecked(prev => !prev)
        }
    }

    function handleSendInfo() {
        if (!buttonDisabled) {
            SelectByIndex("3", "0")
            setAccepted(true)
        }
    }

    return (
        <>
            {!accepted ? (
                <div className='promo-banner' ref={containerRef}>
                    <h2 className='h2-promo'>Введите Ваш номер мобильного телефона</h2>
                    <input className='phone-input' type="tel" name='phone' placeholder='+7(___)___-__-__' value={formatedPhoneNumber} readOnly tabIndex={-1} />
                    <p className='p-promo'>и с Вами свяжется наш менеджер для дальнейшей консультации</p>
                    <Keypad dispatcher={dispatchPhoneNumber} />
                    <div className='checkbox-container'>
                        <div className="checkbox" onClick={handleCheckbox} onKeyDown={handleCheckbox} data-index-x="0" data-index-y="4" tabIndex={0}>
                            {checked && <img style={{ paddingTop: "6px" }} src={checkmark} />}
                        </div>
                        <label className='label-promo' htmlFor="">Согласие на обработку персональных данных</label>
                    </div>
                    <Button value="Подтвердить номер" className="accept-button" isDisabled={buttonDisabled} callback={handleSendInfo} dataIndexX="0" dataIndexY="5" />
                </div>
            ) : (
                <div className='promo-banner'>
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
            <Link to={"/smart-tv-ad"}><Button value={"✕"} className="exit-button" dataIndexX="3" dataIndexY="0" /></Link>
            <div className='qr-container'>
                <span className='qr-span'>Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</span>
                <img className='qr-img' src={qr} alt="qr code" />
            </div>

        </>
    )
}

export default PromoBanner