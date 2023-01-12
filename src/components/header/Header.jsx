import React, { Component } from 'react'
import logo from '../../img/logo.svg'

class Header extends Component {
    render() {
        return (
            <header className="w-[100%] h-[120px]  py-2 px-10 bg-focusGreen flex items-center col-span-2">
                <div className="w-[100px] h-[100px]">
                    <img className="w-[100%] h-[100%] " src={logo} alt="logo" />
                </div>
            </header>
        )
    }
}

export default Header
