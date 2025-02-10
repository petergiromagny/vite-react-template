import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import './index.css'

createRoot(!document.getElementById('root') as unknown as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
