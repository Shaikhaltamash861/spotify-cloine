import React from 'react'
import './header.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useDataLayer } from '../contextApi/DataLayer';
function Header() {
  const [{user},dispatch]=useDataLayer()
  return (
    <div className='header'>
        <div className='header_left'>
            <SearchOutlinedIcon className='search'/>
            <input type='text' placeholder='Search for Artists,Songs' />
        </div>
        <div className='user-detail'>

        <img src='https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png' alt='img'/>
        <p>{user?.display_name}</p>
        </div>
    </div>
  )
}

export default Header