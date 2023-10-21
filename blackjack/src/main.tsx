import React from 'react'
import ReactDOM from 'react-dom/client'
import BlackjackGame from './BlackJackGame.tsx'
import './index.css'
// import '@mui/material/styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BlackjackGame />
  </React.StrictMode>,
)
