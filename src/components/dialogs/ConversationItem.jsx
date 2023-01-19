import React from 'react'

function ConversationItem({ message, imgUrl }) {
    return (
        <div className="flex pt-10 min-w-[400px]">
            <div className="w-10 h-10 rounded-full">
                <img
                    className="rounded-full w-[100%] h-[100%] object-cover"
                    src={imgUrl}
                    alt="conversation"
                />
            </div>
            <div className="ml-4 p-4 text-center border rounded-md">
                <p>{message}</p>
            </div>
        </div>
    )
}

export default ConversationItem
