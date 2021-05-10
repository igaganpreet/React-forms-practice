import React, { useState } from "react";

function App() {
  const [name, setHeading] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    let newName = event.target.value;
    setHeading(newName);
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button>Submit</button>
    </div>
  );
}

export default App;
