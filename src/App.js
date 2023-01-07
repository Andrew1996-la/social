import Header from './components/Header'
import Navigation from './components/Navigation'
import Profile from './components/profile/Profile'
import React from 'react'
import Dialogs from './components/dialogs/Dialogs'

function App() {
    return (
        <div className="grid grid-cols-[2fr,_10fr] grid-rows-[120px,_100%]">
            <Header />
            <Navigation />
            <Profile />
            {/*<Dialogs />*/}
        </div>
    )
}

export default App
