import React, { useState } from 'react'
import Axios from 'axios'


const divStyle = {
    height: '100vh',
    width: '100vw',
    background: 'rgba(0 , 0 , 0 , 0.4',
    position: 'fixed',
    top: '0',
    left: '0'
}

const formStyle = {
    height: '500px',
    width: '250px',
    background: 'white',
    display: 'inline-block',
    position: 'fixed',
    left: '50vw',
    top: '50vh',
    transform: 'translate(-50%, -50%)',
}

const xButtonStyle = {
    position: 'fixed',
    right: '0',
    height: '20px',
    width: '20px'
}

function SignUpModal(props) {

    const [usernameInput, setUsernameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [formMessage, setFormMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleEmailInput = (e) => {
        setEmailInput(e.target.value)
        console.log(e.target.value)
    }

    const handleUsernameInput = (e) => {
        setUsernameInput(e.target.value)
        console.log(e.target.value)
    }

    const handlePasswordInput = (e) => {
        setPasswordInput(e.target.value)
        // console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)

        if (passwordInput.length < 8) {
            return setFormMessage('Password is less than 8 characters')
        }

        Axios.post('https://insta.nextacademy.com/api/v1/users/', {
            username: usernameInput,
            email: emailInput,
            password: passwordInput
        })
            .then(response => {
                console.log(response)
                setIsLoading(false)
                setEmailInput('')
                setUsernameInput('')
                setPasswordInput('')
                props.toggleshowSignUpModal();
            })
            .catch(error => {
                console.log(error.response)
                setIsLoading(false)
                setFormMessage('Sign Up Unsuccessful')
                // setEmailInput('')
                // setUsernameInput('')
                // setPasswordInput('')
            })
    }

    // e.preventDefault()
    // console.log(emailInput)
    // console.log(usernameInput)
    // console.log(passwordInput)


    return (
        <div>
            <div onClick={props.showSignUpModal} style={divStyle} />
            <div style={formStyle}>
                <div>
                    <button style={xButtonStyle} onClick={props.showSignUpModal}>X</button>
                </div>
                <h1>Sign Up Modal</h1>
                <form onSubmit={handleSubmit}>
                    <input type='email' placeholder='Email' value={emailInput} onChange={handleEmailInput} />
                    <br />
                    <input type='text' placeholder='Username' value={usernameInput} onChange={handleUsernameInput} />
                    <br />
                    <input type='password' placeholder='Password' value={passwordInput} onChange={handlePasswordInput} />
                    <p>{formMessage}</p>
                    <br />
                    <input type='submit' value={isLoading ? 'Signing Up' : 'Sign Up'} disabled={emailInput.length === 0 || usernameInput.length === 0 || passwordInput.length === 0 || isLoading} />
                </form>
            </div>
        </div>
    )
}


export default SignUpModal