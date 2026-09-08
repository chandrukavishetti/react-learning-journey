import React, { useState } from 'react'

const App = () => {
  // Initial fruits list
  const [listOfFruits, setListOfFruits] = useState(["Apple", "Banana", "Mango", "Orange", "Avocado"]);
  
  // Search text that user types
  const [searchText, setSearchText] = useState("");

  // Handle when user types
  const handleChange = (event) => {
    setSearchText(event.target.value);
  }

  // Filter the fruits based on search text
  const filteredFruits = listOfFruits.filter(fruit => 
    fruit.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <h2>Search Fruits</h2>
      
      {/* Input box for searching */}
      <input 
        type="text" 
        value={searchText} 
        onChange={handleChange} 
        placeholder="Enter a letter to search"
      />

      {/* Show filtered fruits or "No fruits found" */}
      {filteredFruits.length === 0 ? (
        <p>No fruits found</p>
      ) : (
        <ul>
          {filteredFruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App