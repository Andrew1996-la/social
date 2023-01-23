import React, { Component } from 'react'
import LikePost from './LikePost'

class ProfilePost extends Component {
    render() {
        const posts = this.props.posts
        return (
            <>
                {posts.map((post) => {
                    return (
                        <div
                            className="col-span-2 w-[84%] px-2 mt-7 relative"
                            key={post.id}
                        >
                            <div className="font-josefin text-lightGray text-l font-light">
                                {post.post}
                            </div>
                            <LikePost count={post.likes} />
                        </div>
                    )
                })}
            </>
        )
    }
}

export default ProfilePost
