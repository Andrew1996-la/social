import { generateId } from '../utils/utils'

const ADD_POST = 'ADD_POST'
const UPDATE_TEXT_POST = 'UPDATE_TEXT_POST'

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}

export const updateTextPostActionCreator = (text) => {
    return {
        type: UPDATE_TEXT_POST,
        newTextPost: text,
    }
}

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: generateId(),
                post: state.newPostText,
                likes: 0,
            }

            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_TEXT_POST:
            state.newPostText = action.newTextPost
            return state
        default:
            return state
    }
}

export default profileReducer
