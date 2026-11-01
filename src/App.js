import React from "react";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Combined State Management</h1>

      <div className="container">
        <UserProfile />
        <Counter />
      </div>
    </div>
  );
}

export default App;