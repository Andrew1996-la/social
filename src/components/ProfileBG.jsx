import React, { Component } from 'react'
import bgImg from '../img/bg_img.jpg'

class ProfileBg extends Component {
    render() {
        return (
            <div className="w-[100%] h-[250px] col-span-2">
                <img
                    className="w-[100%] h-[100%] object-cover"
                    src={bgImg}
                    alt="bgImg"
                />
            </div>
        )
    }
}

export default ProfileBg
