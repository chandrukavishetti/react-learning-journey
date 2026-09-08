// import { useState } from "react";

// const [name, setName] = useState("");
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [error, setError] = useState("");
// const [registeredUsers, setRegisteredUsers] = useState("");
// const [input, setInput] = useState("");
// const [users, setUsers] = useState([""]);

// const handleChange = (event) => {
//   setInput(event.target.value);
// }

// const handleSubmit = (event) => {
//   event.preveintDefault();


//   if (name.trim() === "") {
//     name.error(setError = "name have some error")
//   } else if (!email.includes("@")) {
//     email.error(setError("email should be include the @ "))
//   } else if (password.length < 6) {
//     password.error(setError("password must be morethan 6 words"))
//   } else {
//     name.setName(setInput);
//     email.setEmail(setInput);
//     password.setPassword(setInput);

//     setUsers([...users, input]);
//     setInput("");

//   }

// }

// return (
//   <div>
//     {/* Input form to add new user */}
//     <form onSubmit={handleSubmit}>
//       <label>Enter new user: </label>
//       <input
//         type="text"
//         value={input}
//         onChange={handleChange}
//         placeholder="Type user name"
//       />

//       <label>Enter Email ID: </label>
//       <input
//         type="text"
//         value={input}
//         onChange={handleChange}
//         placeholder="Type user Email"
//       />


//       <label>Enter Password: </label>
//       <input
//         type="text"
//         value={input}
//         onChange={handleChange}
//         placeholder="Type user password"
//       />

//       {/* <button type="submit">Register User</button> */}
//     </form>



//     {/* Display users list or "No users" message */}
//     <h2>Users List</h2>
//     {users.length === 0 ? (
//       <p>No users</p>
//     ) : (
//       <ul>
//         {users.map((user, index) => (
//           <li key={index}>
//             {user}
//           </li>
//         ))}
//       </ul>
//     )}
//   </div>
// )

// export default App


import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [registeredUsers, setRegisteredUsers] = useState([]);

  // Handle name change
  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  // Handle email change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  // Handle password change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  // Validate form
  const handleSubmit = (event) => {
    event.preventDefault();  // ✅ Correct spelling

    let newErrors = {};  // Store all errors

    // Validate name
    if (name.trim() === "") {
      newErrors.name = "Name is required";
    }

    // Validate email
    if (!email.includes("@")) {
      newErrors.email = "Email must contain @";
    }

    // Validate password
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // If there are errors, show them
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;  // Stop here, don't add user
    }

    // If no errors, add user to list
    setErrors({});  // Clear errors
    setRegisteredUsers([...registeredUsers, { name, email, password }]);
    
    // Clear form
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      {/* Registration Form */}
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
        />
        {errors.name && <p>{errors.name}</p>}

        {/* Email Input */}
        <label>Email: </label>
        <input
          type="text"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
        />
        {errors.email && <p>{errors.email}</p>}

        {/* Password Input */}
        <label>Password: </label>
        <input
          type="text"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
        />
        {errors.password && <p>{errors.password}</p>}

        {/* Register Button */}
        <button type="submit">Register</button>
      </form>

      {/* Display registered users */}
      <h2>Registered Users</h2>
      {registeredUsers.length === 0 ? (
        <p>No users registered yet</p>
      ) : (
        <ul>
          {registeredUsers.map((user, index) => (
            <li key={index}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App