import React from 'react'
import New from './components/new/new'
import Music from './components/music/music'
import Settings from './components/settings/settings'
import { Routes, Route } from 'react-router-dom'
import NoteFound from './components/notFound/noteFound'
import Layout from './components/Layout/Layout'
import ProfileContainer from './components/profile/ProfileContainer'
import DialogContainer from './components/dialogs/DialogContainer'

function App({ store }) {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout
                            navigationState={store.getState().navigationSection}
                        />
                    }
                >
                    <Route index element={<ProfileContainer store={store} />} />
                    <Route
                        path="message/*"
                        element={<DialogContainer store={store} />}
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
