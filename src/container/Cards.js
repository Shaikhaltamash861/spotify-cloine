import React from 'react'
import './card.css'

function Cards({song}) {
    console.log(song.track.album)
  return (
    <div className='card'>
        <div className='img'>
           <img src={song?.track?.album?.images[0]?.url} alt='bb' />
        </div>
        <div className='song_details'>
         <p>jkbjdfe</p>
         <p>jbdhjeb</p>
        </div>
    </div>
  )
}

export default Cards