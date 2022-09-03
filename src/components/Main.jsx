import React, { Component } from 'react'
import ProfileBG from './ProfileBG'
import ProfilePhoto from './ProfilePhoto'
import ProfileInfo from './ProfileInfo'
import ProfileInput from './ProfileInput'
import ProfilePost from './ProfilePost'

class Main extends Component {
    render() {
        return (
            <section className="bg-mainGreen grid grid-rows-rowsMainSection grid-cols-[3.5fr,_8fr] ">
                <ProfileBG />
                <ProfilePhoto />
                <ProfileInfo />
                <ProfileInput />
                <ProfilePost />
            </section>
        )
    }
}

export default Main
