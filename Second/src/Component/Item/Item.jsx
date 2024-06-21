import React from 'react'
import './Item.css'

const Item = (props) => {
  // const name = props.name;
  return (
    <div>
      <div className='item'>{props.name}</div>
    </div>
  )
}

export default Item
