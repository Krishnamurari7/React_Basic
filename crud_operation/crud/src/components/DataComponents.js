import React, { useState } from 'react';
import './DataComponents.css'

const DataComponent = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Krishna' },
    { id: 2, name: 'Murari' },
  ]);

  // Create operation
  const addItem = (itemName) => {
    const newItem = { id: data.length + 1, name: itemName };
    setData([...data, newItem]);
  };


  // Update operation
  const updateItem = (id, newName) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, name: newName } : item
    );
    setData(updatedData);
  };

  // Delete operation
  const deleteItem = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  return (
    <div className='home'>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name}{' '}
            <button onClick={() => updateItem(item.id, prompt('New name:'))}>
              Update
            </button>{' '}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addItem(prompt('Enter item name:'))}>
        Add Item
      </button>
    </div>
  );
};

export default DataComponent;
