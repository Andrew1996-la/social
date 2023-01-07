import React, { Component } from 'react'
import LikePost from './LikePost'
import messages from '../../data/messages'

class ProfilePost extends Component {
    render() {
        return (
            <>
                {messages.map((messages) => {
                    return (
                        <div
                            className="col-span-2 w-[84%] px-2 mt-7 relative"
                            key={messages.id}
                        >
                            <div className="font-josefin text-lightGray text-l font-light">
                                {messages.message}
                            </div>
                            <LikePost count={messages.likes} />
                        </div>
                    )
                })}
            </>
        )
    }
}

export default ProfilePost
