import React from 'react'
import Card from './Component/Card/Card'
import Item from './Component/Item/Item.jsx'
import ItemData from './Component/ItemData/ItemData.jsx'

const App = () => {
  const response = [
    {
      itemName: "Nirma",
      date: 20,
      month: "january",
      year: "2002"
    },
    {
      itemName: "Surf-Excel",
      date: 10,
      month: "march",
      year: "2000"
    },
    {
      itemName: "Tide",
      date: 30,
      month: "August",
      year: "1998"
    }
  ]
  return (
    <div className='main'>
      <Card >
        <Item name = {response[0].itemName}/>
        <ItemData date = {response[0].date} month= {response[0].month} year= {response[0].year} />

        <Item name = {response[1].itemName}/>
        <ItemData date = {response[1].date} month= {response[1].month} year= {response[1].year} />

        <Item name = {response[2].itemName}/>
        <ItemData date = {response[2].date} month= {response[2].month} year= {response[2].year} />
      </Card>
    </div>
  )
}

export default App
