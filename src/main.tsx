import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CalendarContextProvider } from './contexts/CalendarContext.tsx'
import { ModalContextProvider } from './contexts/ModalContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CalendarContextProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </CalendarContextProvider>
  </React.StrictMode>
)
