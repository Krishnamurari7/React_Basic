
import { useState } from 'react';
import './App.css';

function App() {
  const[count, setcount] = useState(0);

  function decrehandler() {
    setcount(count-1)
  }
  function increhandler() {
    setcount(count+1)
  }
  function resetHandler() {
    setcount(0)
  }
  return (
   <div className='h-[100vh] w-[100vw] flex justify-center items-center flex-col gap-10 bg-blue-300'>
   <div className=" text-white font-medium text-2xl  ">
   Increament AND Decrement
   </div>
   <div className="bg-white flex justify-center gap-12 py-3 rounded-lg text-[25px]">
    <button className="border-r-2 text-center w-20  border-[#bfbfbf] text-5xl" onClick={decrehandler}>-</button>
    <div className='text-5xl'>{count}</div>
    <button className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl" onClick={increhandler}>+</button>
    </div>
    <button onClick={resetHandler} className='bg-black text-white text-xl rounded-lg p-3'>Reset</button>

   </div>
  );
}

export default App;
