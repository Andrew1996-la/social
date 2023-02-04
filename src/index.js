import React from 'react'
import './index.css'
import store from './redux/storeRedux'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
const renderThree = () => {
    root.render(
        <BrowserRouter>
            <App store={store} />
        </BrowserRouter>
    )
}

renderThree(store.getState())

store.subscribe(() => {
    const state = store.getState()
    renderThree(state)
})
