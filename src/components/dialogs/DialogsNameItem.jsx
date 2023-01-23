import React from 'react'
import { NavLink } from 'react-router-dom'
import img from '../../img/girlAvatar.jpg'

function DialogsNameItem({ dialogName }) {
    return (
        <li className="pt-4">
            <NavLink to={`${dialogName.id}`}>
                <div className="w-10 h-10 rounded-full">
                    <img
                        className="rounded-full w-[100%] h-[100%] object-cover"
                        src={img}
                        alt=""
                    />
                </div>
                {dialogName.name}
            </NavLink>
        </li>
    )
}

export default DialogsNameItem
