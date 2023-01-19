import React, { Component } from 'react'

import dialogsName from '../../data/dialogsName'
import conversation from '../../data/conversation'

class Dialogs extends Component {
    render() {
        return (
            <>
                <section className="h-[calc(100vh-240px)] grid grid-cols-[2fr,_10fr] pt-[20px]">
                    <div className="grid justify-center border-r-2 border-lightGray h-[100%]">
                        <ul className="text-s font-josefin text-lightGray">
                            {dialogsName.map((dialogName) => {
                                return (
                                    <li className="pt-4" key={dialogName.id}>
                                        {dialogName.name}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="pl-8">
                        <ul className="text-s font-josefin text-lightGray">
                            {conversation.map((conversationItem) => {
                                return (
                                    <li
                                        className="pt-4"
                                        key={conversationItem.id}
                                    >
                                        {conversationItem.message}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </section>
            </>
        )
    }
}

export default Dialogs
