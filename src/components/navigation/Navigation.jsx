import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

class Navigation extends Component {
    render() {
        const activeStyle = {
            color: '#ECEBE5',
        }

        const navigationMenuLinks = this.props.navigationMenuLinks

        return (
            <nav className="bg-darkGreen flex justify-center items-center h-[100%]">
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
        )
    }
}

export default Navigation
