import React from 'react'
import Card from './Component/Card/Card'
import Item from './Component/Item/Item'
import ItemData from './Component/ItemData/ItemData.jsx'

const App = () => {
  return (
    <div className='main'>
      {/* <Card > */}
        <Item/>
        <ItemData />
      {/* </Card> */}
    </div>
  )
}

export default App
