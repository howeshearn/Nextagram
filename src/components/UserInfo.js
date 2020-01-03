import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ImgStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%'
};

function UserInfo(props) {

    const [username, setUsername] = useState('')
    const [profPic, setProfPic] = useState('')
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://insta.nextacademy.com/api/v1/users/${props.id}`)
            .then(result => {
                setUsername(result.data.username)
                setProfPic(result.data.profileImage)
                setLoading(false)
                // console.log(result);
            })
    }, []);

    if (isLoading === true) {
        return (
            <p>Chicken Rice...</p>
        )
    }

    return (
        <div>
            <Link to={`/users/${props.id}`}>{username}</Link>
            <img style={ImgStyle} src={profPic} />
        </div>
    )
}

export default UserInfo