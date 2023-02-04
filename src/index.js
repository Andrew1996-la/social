import React from 'react'
import './index.css'
import store from './redux/store'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderThree = (state) => {
    root.render(
        <BrowserRouter>
            <App store={store} />
        </BrowserRouter>
    )
}

renderThree(store.getState())

store.subscribe(renderThree)
