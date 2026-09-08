import React, { useState } from 'react'

const App = () => {
  const [input, setinput] = useState("");
  const [todos, setTodos] = useState([]);  // ✅ NEW: Store all todos

  const handleChange = (event) => {
    setinput(event.target.value);  // Update what user is typing
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // ✅ NEW: Add the input to todos list
    if (input.trim() !== "") {  // Don't add empty todos
      setTodos([...todos, input]);  // Add to the list
      setinput("");  // Clear the input box
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter Todo: </label>
        <input 
          type="text" 
          value={input} 
          onChange={handleChange} 
        />
        <button type="submit">Add Todo</button>
      </form>

      {/* ✅ NEW: Display all todos */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default App