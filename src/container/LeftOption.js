import React from 'react'
import './leftoption.css'

function LeftOption({title,Icon}) {
  return (
    <div className='left_option'>
      { Icon && <Icon className='icons'/>}
        <p>{title}</p>

    </div>
  )
}

export default LeftOption