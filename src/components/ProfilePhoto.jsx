import React, { Component } from 'react'
import userLogo from '../img/userLogo.jpg'

class ProfilePhoto extends Component {
    render() {
        return (
            <div className="w-[350px] h-[550px] px-2 py-2">
                <img
                    className="w-[100%] h-[100%] object-cover rounded-2xl"
                    src={userLogo}
                    alt="user photo"
                />
            </div>
        )
    }
}

export default ProfilePhoto
