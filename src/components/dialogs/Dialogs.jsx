import React, { Component } from 'react'

import ConversationItem from './ConversationItem'
import img from '../../img/girlAvatar.jpg'
import DialogsNameItem from './DialogsNameItem'
import DialogsInput from './DialogsInput'

class Dialogs extends Component {
    render() {
        const { dialogsName, conversation } = this.props.dialogsState
        return (
            <>
                <section className="h-[calc(100vh-240px)] grid grid-rows-[10fr,_1fr] grid-cols-[2fr,_10fr] pt-[20px]">
                    <div className="grid justify-center border-r-2 border-lightGray h-[100%]">
                        <ul className="text-s font-josefin text-lightGray">
                            {dialogsName.map((dialogName) => {
                                return (
                                    <DialogsNameItem
                                        key={dialogName.id}
                                        dialogName={dialogName}
                                    />
                                )
                            })}
                        </ul>
                    </div>
                    <div className="pl-8">
                        <ul className="text-s font-josefin text-lightGray">
                            {conversation.map((conversationItem) => {
                                return (
                                    <ConversationItem
                                        key={conversationItem.id}
                                        message={conversationItem.message}
                                        imgUrl={img}
                                    />
                                )
                            })}
                        </ul>
                    </div>
                    <DialogsInput />
                </section>
            </>
        )
    }
}

export default Dialogs
