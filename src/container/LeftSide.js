import React from 'react'
import './left.css'
import logo from '../asset/spotify.png'
import LeftOption from './LeftOption'
import { useDataLayer } from "../contextApi/DataLayer.js";
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

function LeftSide() {
  const [{playlists},dispatch]=useDataLayer();
  console.log(playlists)
  return (
    <div className='leftside'>
      <div className='logo'>
      
      <img src={logo} alt='img'/>
      
      </div>
      <LeftOption title="Home" Icon={HomeSharpIcon}  />
      <LeftOption title="Search" Icon={SearchSharpIcon}  />
      <LeftOption title="Your Library" Icon={LocalLibraryIcon}  />
      <br/>
      <strong className='playlist'>PLAYLISTS</strong>
      <hr/>
      <div className='playlists'>
        {
          playlists?.items?.map(playlist=>(

            <p className='list'>{playlist.name}</p>
          ))
        }
        {
          playlists?.items?.map(playlist=>(

            <p className='list'>{playlist.name}</p>
          ))
        }
       
      
      </div>
    </div>
  )
}

export default LeftSide