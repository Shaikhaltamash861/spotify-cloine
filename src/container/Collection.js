import React from 'react'
import './collection.css';
function Collection({spotify, track}) {
  console.log(track.uri)
  console.log(spotify)
  const playSong=(uri)=>{
    spotify.play().then((data)=>{
      console.log(data)
    }).catch(err=>{
      console.log(err)
    })


  }
  return (
    <div className='collection' onClick={()=>playSong(track?.uri)}>
        <img/>
        <div className='about_song'>
       <img src={track.album.images[0].url} alt='abc'/>
       <h2>{track.name}</h2>
       <p>{track.name}</p>
        </div>
    </div>
  )
}

export default Collection