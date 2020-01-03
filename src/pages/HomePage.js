import React, { useState, useEffect } from 'react'
import UserOverview from '../components/UserOverview'
import axios from 'axios'
// import { useHistory } from 'react-router-dom'


function HomePage(props) {
    // let history = useHistory()

    // if (Object.keys(props.currentUser).length === 0) {
    //     history.push('/login')
    //     // toast('login first')
    // }

    const [userInfos, setUserInfos] = useState([])

    useEffect(() => {
        axios.get('https://insta.nextacademy.com/api/v1/users')
            .then(result => {
                console.log(result);
                setUserInfos(result.data)
            })
    }, []);

    return (
        <div>
            {
                props.currentUser.username ?
                    <h1>Hello, {props.currentUser.username}</h1> :
                    null
            }
            {
                userInfos.map(userInfo => {
                    return <UserOverview id={userInfo.id} />
                })
            }
        </div>
    )
}

export default HomePage