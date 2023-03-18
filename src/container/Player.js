import React, { useEffect, useState } from 'react'
import './player.css'
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
function Player({spotify}) {
const [songInfo,setSongInfo]=useState()
const [isPlaying,setIsPlaying]=useState()

  const fetchMySong=()=>{
    setIsPlaying(true)
    spotify.getMyCurrentPlayingTrack()
    .then(data=>{
      setSongInfo(data?.item)
    })
    .catch(err=>(
      console.log(err)
    ))
  }
  const getSongState=()=>{
    spotify.getMyCurrentPlaybackState()
    .then(data=>{
      setIsPlaying(data?.is_playing)
    })
  }
  useEffect(()=>{
      getSongState()
  },[])
  const playSong=()=>{
    spotify.play({
      
    })
  }
  console.log(songInfo?.album?.images[2])
  return (
    <div className='player'>
      <div className='album'>
        <img className='img' src={songInfo?.album?.images[1].url} alt='df'/>
        <div className='player_songInfo'>
              <h4>{songInfo?.name}</h4>
           <p>{songInfo?.artists[0].name}</p>
        </div>

      </div>
      <div className='controls'>
          <ShuffleIcon className='icon' id='green'/>
          <SkipPreviousIcon className='icon' onClick={getSongState} />
          {
            isPlaying?<PauseCircleIcon  id='play' className='icon_play' onClick={()=>setIsPlaying(false)} />:<PlayCircleOutlinedIcon  id='play' className='icon_play' onClick={fetchMySong}/>
          }
          
          <SkipNextIcon className='icon'/>
          <RepeatOutlinedIcon className='icon' id='green'/>
     
      </div>
      <div className='player__right'>
        <p>this is right</p>
      </div>
    </div>
  )
}

export default Player