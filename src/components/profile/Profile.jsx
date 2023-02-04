import React from 'react'
import ProfileBG from './ProfileBG'
import ProfilePhoto from './ProfilePhoto'
import ProfileInfo from './ProfileInfo'
import ProfileInput from './ProfileInput'
import ProfilePost from './ProfilePost'

function Profile({ posts, addPost, updateText, newTextMessage }) {
    return (
        <section className="grid grid-cols-[2fr,_10fr]">
            <ProfileBG />
            <ProfilePhoto />
            <ProfileInfo />
            <ProfileInput
                addPost={addPost}
                updateText={updateText}
                newTextMessage={newTextMessage}
            />
            <ProfilePost posts={posts} />
        </section>
    )
}

export default Profile
