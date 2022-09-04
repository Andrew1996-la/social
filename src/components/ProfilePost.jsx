import React, { Component } from 'react'

class ProfilePost extends Component {
    render() {
        return (
            <div className="col-span-2 w-[84%] px-2 mt-7">
                <div className="font-josefin text-lightGray text-l font-light">
                    {this.props.message}
                </div>
            </div>
        )
    }
}

export default ProfilePost
