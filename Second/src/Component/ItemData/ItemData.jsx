import React from 'react'
import './ItemData.css'

const ItemData = (props) => {
  return (
    <div className='itemdata'>
        <div>{props.date}</div>
        <div>{props.month} </div>
        <div>{year}</div>
      
    </div>
  )
}

export default ItemData
