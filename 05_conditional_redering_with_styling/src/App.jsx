import React, { useState } from 'react'

const App = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(false);

  const handleClick=()=>{
    setIsLoggedIn(!isLoggedIn);
  }

  const buttonStyle={
    backgroundColor:isLoggedIn?'red':'green',
    color:'white',
    padding:'10px,20px',
    border:'none',
    borderRadius:'5px',
    cursor:'pointer',
    fontSize:'16px'
  }

  const messageStyle={
    color:isLoggedIn?'green':'red',
    fontSize:'18px',
    marginTop:'20px'
  }
  return (
    <div>
      <button onClick={handleClick} style={buttonStyle}>{isLoggedIn?"Logout":"Login"}</button>
      <p style={messageStyle}>{isLoggedIn?"you are loggedIn!":"please log in"}</p>
    </div>
  )
}

export default App