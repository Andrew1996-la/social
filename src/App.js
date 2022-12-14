import Profile from './components/profile/Profile'
import React from 'react'
import Dialogs from './components/dialogs/Dialogs'
import New from './components/new/new'
import Music from './components/music/music'
import Settings from './components/settings/settings'
import { Routes, Route } from 'react-router-dom'
import NoteFound from './components/notFound/noteFound'
import Layout from './components/Layout/Layout'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Profile />} />
                    <Route path="message" element={<Dialogs />} />
                    <Route path="new" element={<New />} />
                    <Route path="music" element={<Music />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="*" element={<NoteFound />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
