import React, { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name || !email || !password) {
      setMessage("Please fill in all fields!");
      return;
    }

    setMessage(`Welcome ${name}! Your account has been created.`);
  }

  return (
    <div className="signup">
      <h2>Create Account</h2>

      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign Up</button>
      </form>

      <button
        className="message-button"
        onClick={() => setMessage("Welcome! Thanks for visiting our page.")}
      >
        Display Message
      </button>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default Signup;