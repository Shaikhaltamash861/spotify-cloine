import React from 'react'
import './body.css'
import { useDataLayer } from '../contextApi/DataLayer'
import Cards from './Cards'
import Collection from './Collection'
function Body({spotify}) {
    const [{recentPlay,newRelease},dispatch]=useDataLayer()
   
 
    console.log(newRelease)

  return (
    <div className='bodys'>

      <h2 className='category'>New Release</h2>
      <div className='body'>

      <div className='grid-container'>

      {
        recentPlay?.items?.map((item,index)=>(
          
          <Collection spotify={spotify} key={index} className='card' track={item.track}/>
          ))
        }
        </div>
    </div>
        </div>
  )
}

export default Body