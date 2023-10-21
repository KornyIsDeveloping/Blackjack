// import { useState } from 'react'
import MainMenu from './gameMenu/MainMenu'
import './BlackJackGame.css'

function BlackjackGame() {

  return (
    <>
      <div className="app">
        <h1><span>B</span>lack<span>j</span>ack</h1>
          <MainMenu />
      </div> 
    </>
  )
}

export default BlackjackGame
