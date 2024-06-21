import React from 'react'
import './ItemData.css'

const ItemData = (props) => {
  const date = props.date;
  const month = props.month;
  const year = props.year;
  return (
    <div className='itemdata'>
        <span>{date}</span>
        <span>{month} </span>
        <span>{year}</span>
      
    </div>
  )
}

export default ItemData
