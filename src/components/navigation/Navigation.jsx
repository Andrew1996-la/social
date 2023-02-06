import React from 'react'
import { NavLink } from 'react-router-dom'

import FriendItemNavBar from './FriendItemNavBar'

function Navigation(props) {
    const activeStyle = {
        color: '#ECEBE5',
    }
    const { navigationMenuLinks, friends } = props

    return (
        <div className="bg-darkGreen h-[100%]">
            <nav className="flex justify-center items-center">
                <ul className="absolute top-[260px]">
                    {navigationMenuLinks.map((link) => {
                        return (
                            <li
                                className="text-l font-aboreto text-mainGreen"
                                key={link.id}
                            >
                                <NavLink
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                    to={link.link}
                                >
                                    {link.linkName}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <div className="mt-[350px]">
                <h3 className="text-l text-center text-mainGreen font-aboreto">
                    Friends
                </h3>
                <div className="flex flex-wrap justify-around w-[200px] mt-4 mx-auto">
                    {friends.map((friend) => {
                        return (
                            <FriendItemNavBar
                                key={friend.id}
                                name={friend.name}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Navigation
