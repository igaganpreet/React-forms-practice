import React, { useState } from "react";

function App() {
  const [heading, setHeading] = useState("hello");

  function handleChange(event) {
    console.log(event.target.value);
    let nw = event.target.value;
    setHeading("hello " + nw);
  }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
      />
      <button>Submit</button>
    </div>
  );
}

export default App;
