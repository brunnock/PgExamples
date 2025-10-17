import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Examples from './Examples.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Examples />
  </StrictMode>,
)
