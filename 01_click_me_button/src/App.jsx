import React, { useState } from 'react'
import message from './displaymessage'

const App = () => {
  const [displayText,setDisplayText]=useState("");

  const handleClick=()=>{
    setDisplayText(message());
  }
  return (
    <div>
      <button onClick={handleClick}>click me</button>
      <p>{displayText}</p>
    </div>

  )
}

export default App