import React from "react";

const Ternary = () => {
  const isLoggedIn = true;

  return (
    <div>
      <h2>
        {isLoggedIn ? "Welcome Back!" : "Please Log In"}
      </h2>
    </div>
  );
};

export default Ternary;