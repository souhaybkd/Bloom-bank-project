import React from 'react'
import Navbar from '../components/Navbar'
import SignUpForm from '../components/signupForm'
import './SignUpPage.css'

const SignUp = () => {
    return (
        <>
            <Navbar />
            <div className='signupform'>
                <SignUpForm />
            </div>

        </>
    )
}

export default SignUp