import { generateId } from '../utils/utils'

const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

const initialState = {
    dialogsName: [
        {
            id: 1,
            name: 'Katya',
        },
        {
            id: 2,
            name: 'Alina',
        },
        {
            id: 3,
            name: 'Maria',
        },
    ],
    conversation: [
        {
            id: 1,
            message: 'Hi how are you?',
        },
        {
            id: 2,
            message: 'What is your life?',
        },
        {
            id: 3,
            message: 'Are you genius!!!',
        },
    ],
    newMessageText: '',
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = {
                id: generateId(),
                message: state.newMessageText,
            }
            state.conversation.push(newMessage)
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText
            return state
        default:
            return state
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: text,
    }
}

export default dialogReducer
