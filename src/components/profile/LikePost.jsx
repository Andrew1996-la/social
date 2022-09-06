import React, { Component } from 'react'
import iconLike from '../../img/like_icon.svg'

class LikePost extends Component {
    render() {
        return (
            <div className="absolute bottom-0 right-0 flex justify-between w-[50px]">
                <div className="w-[20px]">
                    <img src={iconLike} alt="like image" />
                </div>
                <span className="block text-lightGray">{this.props.count}</span>
            </div>
        )
    }
}

export default LikePost
