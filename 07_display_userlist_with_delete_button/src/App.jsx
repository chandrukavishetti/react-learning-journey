import React, { useState } from 'react'

const App = () => {
  const [users, setUsers] = useState(["John", "Sarah", "Mike", "Emma", "David"]);
  const [input, setInput] = useState("");

  // Handle when user types
  const handleChange = (event) => {
    setInput(event.target.value);
  }

  // Handle when user clicks Add button
  const handleSubmit = (event) => {
    event.preventDefault();  // ✅ Correct spelling

    if (input.trim() !== "") {
      setUsers([...users, input]);  // Add new user
      setInput("");  // Clear input
    }
  }

  // Handle when user clicks Delete button
  const handleDelete = (indexToDelete) => {
    setUsers(users.filter((user, index) => index !== indexToDelete));
  }

  return (
    <div>
      {/* Input form to add new user */}
      <form onSubmit={handleSubmit}>
        <label>Enter new user: </label>
        <input 
          type="text" 
          value={input} 
          onChange={handleChange}
          placeholder="Type user name"
        />
        <button type="submit">Add User</button>
      </form>

      {/* Display users list or "No users" message */}
      <h2>Users List</h2>
      {users.length === 0 ? (
        <p>No users</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App