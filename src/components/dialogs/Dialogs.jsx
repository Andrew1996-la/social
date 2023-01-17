import React, { Component } from 'react'

class Dialogs extends Component {
    render() {
        return (
            <>
                <section className="h-[calc(100vh-240px)] grid grid-cols-[2fr,_10fr] pt-[20px]">
                    <div className="grid justify-center border-r-2 border-lightGray h-[100%]">
                        <ul className="text-s font-josefin text-lightGray">
                            <li>Katya</li>
                            <li>Irina</li>
                            <li>Maria</li>
                        </ul>
                    </div>
                    <div className="pl-8">
                        <ul className="text-s font-josefin text-lightGray">
                            <li>His how are you?</li>
                            <li>What is your life?</li>
                            <li>Are you genius</li>
                        </ul>
                    </div>
                </section>
            </>
        )
    }
}

export default Dialogs
