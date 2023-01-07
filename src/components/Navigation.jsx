import React, { Component } from 'react'
import navigationMenuLinks from '../data/navigationMenuLinks'

class Navigation extends Component {
    render() {
        return (
            <nav className="bg-darkGreen flex justify-center items-center">
                <ul>
                    {navigationMenuLinks.map((link) => {
                        return (
                            <li
                                className="text-l font-aboreto text-mainGreen"
                                key={link.id}
                            >
                                <a href={link.link}>{link.linkName}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navigation
