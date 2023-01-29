import React from 'react'
import './index.css'
import state, {
    addPost,
    sendMessage,
    updateNewMessageText,
    updateTextPost,
} from './redux/state'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { subscribe } from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderThree = (state) => {
    root.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updateTextPost={updateTextPost}
                sendMessage={sendMessage}
                updateNewMessageText={updateNewMessageText}
            />
        </BrowserRouter>
    )
}

renderThree(state)

subscribe(renderThree)
