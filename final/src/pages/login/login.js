import { useEffect, useRef, useState } from 'react'
import welcome from '../../assets/images/welcome.png'
import { useNavigate } from 'react-router';

export const Login = () => {

    const [email, setEmail] = useState();
    const [pass, setPass] = useState();

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const changePassword = (e) => {
        setPass(e.target.value)
    }

    const navigate = useNavigate()

    const clickLogin = (e) => {
        e.preventDefault()
        
        if (email === 'email@com' && pass === 'admin') {
            navigate('/users')
        }
        else{
            alert('wrong email or password')
        }
    }

    const inputElement = useRef()

    useEffect(() => {
        inputElement.current.focus()
    }, [])

    return (
        <form className='login-form' onSubmit={clickLogin}>
            <div className='login-main'>
                <img className='welcome-img' src={welcome} alt='welcome' />
                <input onChange={changeEmail} required ref={inputElement} className='login-input' placeholder='email@com' type="email" />
                <input onChange={changePassword} required className='login-input' placeholder='admin' type="password" />
                <button type='submit' className='login-btn'>Login</button>
            </div>
        </form>
    )
}