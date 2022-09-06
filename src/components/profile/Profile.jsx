import React, { Component } from 'react'
import ProfileBG from './ProfileBG'
import ProfilePhoto from './ProfilePhoto'
import ProfileInfo from './ProfileInfo'
import ProfileInput from './ProfileInput'
import ProfilePost from './ProfilePost'
import MESSAGES from '../../data/messages'

class Profile extends Component {
    render() {
        return (
            <section className="bg-mainGreen grid grid-rows-rowsProfileSection grid-cols-[3.5fr,_8fr] ">
                <ProfileBG />
                <ProfilePhoto />
                <ProfileInfo />
                <ProfileInput />
                {MESSAGES.map((post) => {
                    return (
                        <ProfilePost
                            key={post.id}
                            message={post.message}
                            likes={post.likes}
                        />
                    )
                })}
            </section>
        )
    }
}

export default Profile
