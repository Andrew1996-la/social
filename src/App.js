import Profile from './components/profile/Profile'
import React from 'react'
import Dialogs from './components/dialogs/Dialogs'
import New from './components/new/new'
import Music from './components/music/music'
import Settings from './components/settings/settings'
import { Routes, Route } from 'react-router-dom'
import NoteFound from './components/notFound/noteFound'
import Layout from './components/Layout/Layout'

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
                    <Route
                        index
                        element={
                            <Profile
                                profileState={store.getState().profilePage}
                                addPost={store.addPost.bind(store)}
                                updateTextPost={store.updateTextPost.bind(
                                    store
                                )}
                            />
                        }
                    />
                    <Route
                        path="message/*"
                        element={
                            <Dialogs
                                dialogsState={store.getState().messagePage}
                                sendMessage={store.sendMessage.bind(store)}
                                updateNewMessageText={store.updateNewMessageText.bind(
                                    store
                                )}
                            />
                        }
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
