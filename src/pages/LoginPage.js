// import React, { useState } from 'react'
// import Axios from 'axios'

// const divStyle = {
//     height: '100vh',
//     width: '100vw',
//     background: 'rgba(0 , 0 , 0 , 0.4',
//     position: 'fixed',
//     top: '0',
//     left: '0'
// }

// const formStyle = {
//     height: '500px',
//     width: '250px',
//     background: 'white',
//     display: 'inline-block',
//     position: 'fixed',
//     left: '50vw',
//     top: '50vh',
//     transform: 'translate(-50%, -50%)',
// }

// const xButtonStyle = {
//     position: 'fixed',
//     right: '0',
//     height: '20px',
//     width: '20px'
// }

// function LoginPage(props) {

//     const [usernameInput, setUsernameInput] = useState('')
//     const [passwordInput, setPasswordInput] = useState('')
//     const [formMessage, setFormMessage] = useState('')
//     const [isLoading, setIsLoading] = useState(false)

//     const handleUsernameInput = (e) => {
//         setUsernameInput(e.target.value)
//         console.log(e.target.value)
//     }

//     const handlePasswordInput = (e) => {
//         setPasswordInput(e.target.value)
//         console.log(e.target.value)
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         setIsLoading(true)

//         Axios.post('https://insta.nextacademy.com/api/v1/login', {
//             username: usernameInput,
//             password: passwordInput
//         })
//             .then(response => {
//                 setIsLoading(false);
//                 console.log(response.data)
//                 localStorage.setItem('jwt', response.data.auth_token)
//                 props.updateUser(response.data.user)
//                 setUsernameInput('')
//                 setPasswordInput('')
//                 props.showLoginModal()
//             })
//             .catch(error => {
//                 console.log(error.response)
//                 // setFormMessage(error.response.data.message)
//                 setIsLoading(false)
//             })
//     }

//     return (
//         <div>
//             <div onClick={props.showLoginModal} style={divStyle} />
//             <div style={formStyle}>
//                 <div>
//                     <button style={xButtonStyle} onClick={props.showLoginModal}>X</button>
//                 </div>
//                 <h1>Login Modal</h1>
//                 <form onSubmit={handleSubmit}>
//                     <input type='text' placeholder='Username' value={usernameInput} onChange={handleUsernameInput} />
//                     <br />
//                     <input type='password' placeholder='Password' value={passwordInput} onChange={handlePasswordInput} />
//                     <br />
//                     <input type='submit' value={isLoading ? 'Logging In' : 'Log In'} disabled={usernameInput.length === 0 || passwordInput.length === 0 || isLoading} />
//                 </form>
//                 <p>{formMessage}</p>
//             </div>
//         </div>
//     )
// }

// export default LoginPage