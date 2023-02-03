import React from 'react'
import LoginForm from '../components/loginForm'
import Navbar from '../components/Navbar'
import './Loginpage.css'

const LogIn = () => {
    return (
        <>
            <Navbar />
            <div className='loginform'>
                <LoginForm />
            </div>

        </>
    )
}

export default LogIn