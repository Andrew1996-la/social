import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation'
import Profile from './components/profile/Profile'
import React from 'react'
import Dialogs from './components/dialogs/Dialogs'
import New from './components/new/new'
import Music from './components/music/music'
import Settings from './components/settings/settings'
import { Routes, Route } from 'react-router-dom'
import NoteFound from './components/notFound/noteFound'

function App() {
    return (
        <div className="grid grid-cols-[2fr,_10fr] grid-rows-[120px,_100%]">
            <Header />
            <Navigation />
            <div className="bg-mainGreen">
                <Routes>
                    <Route path="/" element={<Profile />} />
                    <Route path="/message" element={<Dialogs />} />
                    <Route path="/new" element={<New />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="*" element={<NoteFound />} />
                </Routes>
            </div>
        </div>
    )
}

export default App
