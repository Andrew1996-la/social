import React, { Component } from 'react'

class Navigation extends Component {
    render() {
        return (
            <nav className="bg-darkGreen flex justify-center items-center">
                <ul>
                    <li className="text-l font-aboreto text-mainGreen">
                        <a href="#">Profile</a>
                    </li>
                    <li className="text-l font-aboreto text-mainGreen">
                        <a href="#">Message</a>
                    </li>
                    <li className="text-l font-aboreto text-mainGreen">
                        <a href="#">New</a>
                    </li>
                    <li className="text-l font-aboreto text-mainGreen">
                        <a href="#">Music</a>
                    </li>
                    <li className="text-l font-aboreto text-mainGreen">
                        <a href="#">Settings</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navigation
