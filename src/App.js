import Header from './components/Header'
import Navigation from './components/Navigation'
import Profile from './components/Profile'
import React from 'react'

function App() {
    return (
        <div className="grid grid-cols-[2fr,_10fr] grid-rows-[120px,_100%]">
            <Header />
            <Navigation />
            <Profile />
        </div>
    )
}

export default App
