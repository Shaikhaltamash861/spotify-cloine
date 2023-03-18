import React from 'react'
import './spotify.css'
import LeftSide from './LeftSide'
import Player from './Player'
import RightSide from './RightSide'

function Spotify({spotify}) {
  console.log(spotify)
  return (
    <div className='spotify'>
        <div className='leftright'>
         <LeftSide/>
         <RightSide spotify={spotify}/>
        </div>
        <div className='player'>
            <Player spotify={spotify}/>
        </div>
    </div>
  )
}

export default Spotify