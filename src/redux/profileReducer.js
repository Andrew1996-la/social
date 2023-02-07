import { generateId } from '../utils/utils'

const ADD_POST = 'ADD_POST'
const UPDATE_TEXT_POST = 'UPDATE_TEXT_POST'

const initialState = {
    posts: [
        {
            id: 1,
            post: 'post 1 here',
            likes: 1,
        },
        {
            id: 2,
            post: 'it is post number 2',
            likes: 43,
        },
        {
            id: 3,
            post: 'third post',
            likes: 15,
        },
        {
            id: 4,
            post: 'and else one posts',
            likes: 6,
        },
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: generateId(),
                post: state.newPostText,
                likes: 0,
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost],
            }
        case UPDATE_TEXT_POST:
            return { ...state, newPostText: action.newTextPost }
        default:
            return state
    }
}

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

export default profileReducer
