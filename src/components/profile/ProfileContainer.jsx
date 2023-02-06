import React from 'react'
import Profile from './Profile'
import {
    addPostActionCreator,
    updateTextPostActionCreator,
} from '../../redux/profileReducer'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newTextMessage: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateText: (newText) => {
            dispatch(updateTextPostActionCreator(newText))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        },
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer
