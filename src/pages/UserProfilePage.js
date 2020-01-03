import React from 'react'
import { useParams } from 'react-router-dom'
import UserInfo from '../components/UserInfo'
import UserGallery from '../components/UserGallery'

const profileStyle = {
    
}

function UserProfilePage() {

    const { id } = useParams()
    return (
        <div style={profileStyle}>
            <UserInfo id={id} />
            <hr />
            <UserGallery id={id} />
        </div>


    )
}

export default UserProfilePage