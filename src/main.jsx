import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { firebaseConnect } from '../src/Firebase/config.js'

import './index.css'

firebaseConnect()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
