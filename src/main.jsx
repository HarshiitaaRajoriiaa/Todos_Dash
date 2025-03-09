import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Todos from './Dash/Todos'
import Greet from './Dash/Greet'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greet/>
    <Todos/>
  </StrictMode>,
)
