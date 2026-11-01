
import { useState } from "react";

function Toggle() {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <h2>Toggle Component</h2>

      <button onClick={() => setShowText(!showText)}>
        {showText ? "Hide Text" : "Show Text"}
      </button>

      {showText && (
        <p>
          Hello! This text is displayed using React useState Hook.
        </p>
      )}
    </div>
  );
}

export default Toggle;
