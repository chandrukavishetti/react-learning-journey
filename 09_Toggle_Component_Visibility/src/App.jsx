import { useState } from 'react'

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    { id: 1, name: "John", email: "john@gmail.com", age: 25 },
    { id: 2, name: "Sarah", email: "sarah@gmail.com", age: 30 },
    { id: 3, name: "Mike", email: "mike@gmail.com", age: 28 }
  ];

  const handleToggle = (userId) => {
    if (selectedUser === userId) {
      setSelectedUser(null);  // Hide details
    } else {
      setSelectedUser(userId);  // Show details
    }
  };

  return (
    <div>
      <h2>Users</h2>

      {users.map((user) => (
        <div key={user.id}>
          <p>
            {user.name}{" "}
            <button onClick={() => handleToggle(user.id)}>
              {selectedUser === user.id ? "Hide Details" : "View Details"}
            </button>
          </p>

          {/* Show details only for the selected user */}
          {selectedUser === user.id && (
            <div>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Age: {user.age}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default App