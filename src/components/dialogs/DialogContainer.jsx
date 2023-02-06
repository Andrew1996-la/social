import Dialogs from './Dialogs'
import {
    sendMessageActionCreator,
    updateNewMessageTextActionCreator,
} from '../../redux/dialogReducer'

function DialogContainer({ store }) {
    const { dialogsName, conversation, newMessageText } =
        store.getState().messagePage

    const onAddNewMessage = () => {
        store.dispatch(sendMessageActionCreator())
    }

    const onUpdateNewMessageText = (newText) => {
        store.dispatch(updateNewMessageTextActionCreator(newText))
    }

    return (
        <Dialogs
            dialogsName={dialogsName}
            conversation={conversation}
            newMessageText={newMessageText}
            onAddNewMessage={onAddNewMessage}
            onUpdateNewMessageText={onUpdateNewMessageText}
        />
    )
}

export default DialogContainer
