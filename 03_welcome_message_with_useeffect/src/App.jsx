import React, { useEffect, useState } from 'react'

const App = () => {
  const [message,setmessage]=useState(" ");

  const handleClick=()=>{
    setmessage("");
  }
useEffect(() => {
  setmessage("App loaded successfully!");  // ✅ Just set it directly
},[])

  return (
    <div>
      <button onClick={handleClick}>Reset</button>
      <p>{message}</p>
    </div>
  )
}

export default App