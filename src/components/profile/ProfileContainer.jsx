import React from 'react'
import Profile from './Profile'
import {
    addPostActionCreator,
    updateTextPostActionCreator,
} from '../../redux/profileReducer'

const ProfileContainer = ({ store }) => {
    const posts = store.getState().profilePage.posts
    const newTextMessage = store.getState().profilePage.newPostText

    const updateText = (newText) => {
        store.dispatch(updateTextPostActionCreator(newText))
    }

    const addPost = () => {
        store.dispatch(addPostActionCreator())
    }

    return (
        <Profile
            posts={posts}
            updateText={updateText}
            addPost={addPost}
            newTextMessage={newTextMessage}
        />
    )
}

export default ProfileContainer
