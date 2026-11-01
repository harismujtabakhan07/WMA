import React from "react";
import Signup from "./signup";
import Contacts from "./contact";
import Counter from "./counter";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>LAB 5 - React Application</h1>

      <div className="dashboard">
        <Contacts />
        <Signup />
      </div>

      <Counter />
    </div>
  );
}

export default App;