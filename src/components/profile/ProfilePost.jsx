import React, { Component } from 'react'
import LikePost from './LikePost'

class ProfilePost extends Component {
    render() {
        return (
            <div className="col-span-2 w-[84%] px-2 mt-7 relative">
                <div className="font-josefin text-lightGray text-l font-light">
                    {this.props.message}
                </div>
                <LikePost count={this.props.likes} />
            </div>
        )
    }
}

export default ProfilePost
