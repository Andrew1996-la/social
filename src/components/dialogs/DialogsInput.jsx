import React, { useRef } from 'react'

function DialogsInput({ sendMessage, newMessageText, updateNewMessageText }) {
    const messageText = useRef(null)

    const addNewMessage = () => {
        sendMessage()
    }

    const handleUpdateNewMessageText = () => {
        const newText = messageText.current.value
        updateNewMessageText(newText)
    }

    return (
        <div className="w-[100%] col-start-2 row-start-2 mt-4">
            <input
                type="text"
                className="w-[80%] p-4 h-10 rounded-md font-josefin "
                ref={messageText}
                value={newMessageText}
                onChange={handleUpdateNewMessageText}
            />
            <button
                className="h-10 w-20 align-middle rounded-md text-lightGray bg-darkGreen ml-2.5"
                onClick={addNewMessage}
            >
                send
            </button>
        </div>
    )
}

export default DialogsInput
