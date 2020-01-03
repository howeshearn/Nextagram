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

const ImageContainerStyle = {
    height: '150px',
    width: '200px',
}
const ImagePreviewStyle = {
    maxHeight: '70%',
    maxWidth: '70%',
}

function UploadModal(props) {

    const [imagePreview, setImagePreview] = useState(null)
    const [imageFile, setImageFile] = useState(null)
    const [formMessage, setFormMessage] = useState('')

    const handleImageUpload = (e) => {
        setImagePreview(URL.createObjectURL(e.target.files[0]));
        setImageFile(e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let token = localStorage.getItem('jwt')
        let formData = new FormData();
        formData.append("image, imageFile");

        Axios.post("https://insta.nextacademy.com/api/v1/images/", formData, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                if (response.data.success) {
                    setFormMessage("Image Sucessfully Uploaded!")
                    setImagePreview(null)
                    setImageFile(null)
                }
            })
            .catch(error => {
                console.log(error.response)
            })


    }


    return (
        <div>
            <div onClick={props.showUploadModal} style={divStyle} />
            <div style={formStyle}>
                <div>
                    <button style={xButtonStyle} onClick={props.showUploadModal}>X</button>
                </div>
                <h1>Upload Modal</h1>
                <form onSubmit={handleSubmit}>
                    <input type="file" capture accept="image/*" name="image-file" onChange={handleImageUpload} />
                    <div style={ImageContainerStyle}>
                        {
                            imagePreview ?
                                <img src={imagePreview} style={ImagePreviewStyle} /> : null
                        }
                    </div>
                    <button type="submit">Upload</button>
                </form>
            </div>
        </div >

    )
}

export default UploadModal