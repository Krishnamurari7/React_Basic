import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div>
      <div className='item'>{props.name}</div>
    </div>
  )
}

export default Item
