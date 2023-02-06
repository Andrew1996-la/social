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
            const stateCopy = JSON.parse(JSON.stringify(state))

            stateCopy.conversation.push(newMessage)
            stateCopy.newMessageText = ''
            return stateCopy
        case UPDATE_NEW_MESSAGE_TEXT: {
            const stateCopy = JSON.parse(JSON.stringify(state))
            stateCopy.newMessageText = action.newMessageText
            return stateCopy
        }
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
