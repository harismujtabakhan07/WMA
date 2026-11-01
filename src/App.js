import React from "react";

import Greeting from "./components/Greeting";
import Variables from "./components/Variables";
import Destructuring from "./components/Destructuring";
import Ternary from "./components/Ternary";
import SpreadOperator from "./components/SpreadOperator";
import WithoutJSX from "./components/WithoutJSX";

import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>ES6 Features in React</h1>

      <section>
        <h2>Task 1: Arrow Functions</h2>
        <Greeting />
      </section>

      <section>
        <h2>Task 2: Variables</h2>
        <Variables />
      </section>

      <section>
        <h2>Task 3: Destructuring</h2>
        <Destructuring />
      </section>

      <section>
        <h2>Task 4: Ternary Operator</h2>
        <Ternary />
      </section>

      <section>
        <h2>Task 5: Spread Operator</h2>
        <SpreadOperator />
      </section>

      <section>
        <h2>Task 6: Without JSX</h2>
        <WithoutJSX />
      </section>
    </div>
  );
}

export default App;