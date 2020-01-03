import React, { useState } from 'react'
import { Link , useHistory } from 'react-router-dom'

import LoginModal from './LoginModal'
import SignUpModal from './SignUpModal'
import UploadModal from './UploadModal'

const NavStyle = {
    background: "black",
    height: "50px",
}

function Navbar(props) {

    const [loginModal, setLoginModal] = useState(false)
    const [signupModal, setSignUpModal] = useState(false)
    const [uploadModal, setUploadModal] = useState(false)

    let history = useHistory();

    const showLoginModal = () => {
        setLoginModal(!loginModal)
    }
    const showSignUpModal = () => {
        setSignUpModal(!signupModal)
    }
    const showUploadModal = () => {
        setUploadModal(!uploadModal)
    }
    const handleLogOut = () => {
        localStorage.removeItem('jwt');
        history.push('/')
        props.updateUser({});
    }

    return (
        <div>
            <div style={NavStyle}>
                <Link to='/'>Home</Link>
                {
                    props.currentUser.id ?
                        <div>
                            <Link to={`/users/${props.currentUser.id}`}>Profile</Link>
                            <button onClick={() => { setUploadModal(true) }}>Upload</button>
                            <button onClick={handleLogOut}>Log Out</button>
                        </div>
                        :
                        <div>
                            <button onClick={() => { setLoginModal(true) }}>Login</button>
                            <button onClick={() => { setSignUpModal(true) }}>Sign Up</button>
                        </div>
                }
            </div>
            {loginModal ? <LoginModal showLoginModal={showLoginModal} updateUser={props.updateUser} /> : null}
            {signupModal ? <SignUpModal showSignUpModal={showSignUpModal} /> : null}
            {uploadModal ? <UploadModal showUploadModal={showUploadModal} /> : null}
        </div>
    )
}

export default Navbar