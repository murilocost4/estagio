import React from 'react'
import { Routes } from './routes'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Routes />
  </StrictMode>,
)
