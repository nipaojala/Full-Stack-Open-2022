import ReactDOM from 'react-dom/client'
import React from "react"
import { createStore } from "redux"
import counterReducer from "./reducer"
import App from './App'
let store = createStore(counterReducer)

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App store={store}/>)
}

renderApp()
store.subscribe(renderApp)