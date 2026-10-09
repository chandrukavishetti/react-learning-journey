import React, { useState } from 'react';

function SimpleForm() {
  // 1. Create the state variable
  const [text, setText] = useState('');

  return (
    <div>
      {/* 2. Bind the value to state, and update state on change */}
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <p>You are typing: {text}</p>
    </div>
  );
}

export default SimpleForm;
