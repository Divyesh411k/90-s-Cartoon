import React from 'react'
import Navbar from './Navbar'
import './games/gamecard.css'
import GameList from './games/Gamelist'
const Games = () => {
  return (
    <div className="gamebg"> 
       <Navbar /> 
       <GameList/>
     </div>
  )
}

export default Games
