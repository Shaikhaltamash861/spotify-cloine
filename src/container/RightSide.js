import React from 'react'
import Body from './Body'
import Header from './Header'
import './right.css'
function RightSide({spotify}) {
  return (
    <div className='rightside'>
      <Header spotify={spotify}/>
       <Body spotify={spotify}/>
    </div>
  )
}

export default RightSide