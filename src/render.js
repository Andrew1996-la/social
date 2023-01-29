import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import {
    addPost,
    updateTextPost,
    sendMessage,
    updateNewMessageText,
} from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'))

export const renderThree = (state) => {
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
