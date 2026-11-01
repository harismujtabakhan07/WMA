import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import UserProfile from "./components/UserProfile";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <UserProfile />
    </div>
  );
}

export default App;