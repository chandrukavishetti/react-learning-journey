import React, { useState } from 'react'
import increaseNum from './increaseNumber';

const App = () => {
  const [number,setnumber]=useState(0);

  const increase=()=>{
    setnumber(increaseNum(number));
  }
  return (
    <div>
      <button onClick={increase}>increase</button>
      <p>{number}</p>
    </div>
  )
}

export default App