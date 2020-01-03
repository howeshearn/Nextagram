import React from 'react'
import UserGallery from './UserGallery'
import UserInfo from './UserInfo'

const overviewStyle = {
    display: 'flex',
    marginBottom: '50px',
    background: 'pink'
}

function UserOverview(props) {
    return (
        <div style={overviewStyle}>
            <UserInfo id={props.id} />
            <UserGallery id={props.id} />
        </div>
    )
}

export default UserOverview