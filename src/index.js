import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../styles/globals.css'
import '../styles/normalize.css'
import '../styles/Components/navbar.css'
import '../styles/Components/home.css'
import '../styles/Components/about.css'
import '../styles/Components/projects.css'
import '../styles/Components/exp.css'
import '../styles/Components/contact.css'
import '../styles/Components/footer.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
