import React, { Component } from 'react'
import navigationMenuLinks from '../../data/navigationMenuLinks'

import { Link } from 'react-router-dom'

class Navigation extends Component {
    render() {
        return (
            <nav className="bg-darkGreen flex justify-center items-center h-100%">
                <ul>
                    {navigationMenuLinks.map((link) => {
                        return (
                            <li
                                className="text-l font-aboreto text-mainGreen"
                                key={link.id}
                            >
                                <Link to={link.link}>{link.linkName}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navigation
