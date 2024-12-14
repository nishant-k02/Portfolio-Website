/**
 * Copyright 2024 Nishant Khandhar
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/**
 * CSS link
 */
import './index.css'

/**
 * Components
 */
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
