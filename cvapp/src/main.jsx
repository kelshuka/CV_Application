import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ContactInfo from './DOM/contactInfo.jsx'
import CVApp from './cvMain.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CVApp />
  </React.StrictMode>,
)
