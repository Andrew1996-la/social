import React, { Component } from 'react'

import ConversationItem from './ConversationItem'
import img from '../../img/girlAvatar.jpg'
import { NavLink } from 'react-router-dom'

class Dialogs extends Component {
    render() {
        const { dialogsName, conversation } = this.props.dialogsState
        return (
            <>
                <section className="h-[calc(100vh-240px)] grid grid-cols-[2fr,_10fr] pt-[20px]">
                    <div className="grid justify-center border-r-2 border-lightGray h-[100%]">
                        <ul className="text-s font-josefin text-lightGray">
                            {dialogsName.map((dialogName) => {
                                return (
                                    <li className="pt-4" key={dialogName.id}>
                                        <NavLink to={`${dialogName.id}`}>
                                            {dialogName.name}
                                        </NavLink>
                                    </li>
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
                </section>
            </>
        )
    }
}

export default Dialogs
