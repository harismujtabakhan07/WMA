import React, { useState } from "react";

const SpreadOperator = () => {
  const [numbers, setNumbers] = useState([1, 2, 3]);

  const addNumbers = () => {
    setNumbers([...numbers, 4, 5]);
  };

  return (
    <div>
      <h2>Spread Operator</h2>

      <p>Numbers: {numbers.join(", ")}</p>

      <button onClick={addNumbers}>
        Add Numbers
      </button>
    </div>
  );
};

export default SpreadOperator;