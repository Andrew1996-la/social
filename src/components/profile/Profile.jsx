import React, { Component } from 'react'
import ProfileBG from './ProfileBG'
import ProfilePhoto from './ProfilePhoto'
import ProfileInfo from './ProfileInfo'
import ProfileInput from './ProfileInput'
import ProfilePost from './ProfilePost'

class Profile extends Component {
    render() {
        const posts = this.props.profileState.posts
        const addPost = this.props.addPost

        return (
            <section className="grid grid-cols-[2fr,_10fr]">
                <ProfileBG />
                <ProfilePhoto />
                <ProfileInfo />
                <ProfileInput addPost={addPost} />
                <ProfilePost posts={posts} />
            </section>
        )
    }
}

export default Profile
