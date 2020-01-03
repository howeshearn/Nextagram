import React, { useState, useEffect } from 'react'
import axios from 'axios'

const GalleryStyle = {
    height: '100px',
    width: '100px',
}

const divStyle = {
    display: 'flex',
    alignItems: 'center',

}

function UserGallery(props) {

    const [images, setImages] = useState([])
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(`https://insta.nextacademy.com/api/v1/images?userId=${props.id}`)
            .then(result => {
                setImages(result.data)
                setLoading(false)
            })
    }, [props.id]);

    if (isLoading === true) {
        return (
            <p>Chicken Rice...</p>
        )
    }

    return (
        <div style={divStyle}>
            {
                images.map(image => {
                    return <img src={image} style={GalleryStyle} />
                })
            }
        </div>
    )
}

export default UserGallery