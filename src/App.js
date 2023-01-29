import Profile from './components/profile/Profile'
import React from 'react'
import Dialogs from './components/dialogs/Dialogs'
import New from './components/new/new'
import Music from './components/music/music'
import Settings from './components/settings/settings'
import { Routes, Route } from 'react-router-dom'
import NoteFound from './components/notFound/noteFound'
import Layout from './components/Layout/Layout'

function App({ state, addPost, updateTextPost }) {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout navigationState={state.navigationSection} />
                    }
                >
                    <Route
                        index
                        element={
                            <Profile
                                profileState={state.profilePage}
                                addPost={addPost}
                                updateTextPost={updateTextPost}
                            />
                        }
                    />
                    <Route
                        path="message/*"
                        element={<Dialogs dialogsState={state.messagePage} />}
                    />
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
