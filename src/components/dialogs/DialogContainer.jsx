import Dialogs from './Dialogs'
import {
    sendMessageActionCreator,
    updateNewMessageTextActionCreator,
} from '../../redux/dialogReducer'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        dialogsName: state.messagePage.dialogsName,
        conversation: state.messagePage.conversation,
        newMessageText: state.messagePage.newMessageText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddNewMessage: () => {
            dispatch(sendMessageActionCreator())
        },

        onUpdateNewMessageText: (newText) => {
            dispatch(updateNewMessageTextActionCreator(newText))
        },
    }
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogContainer
