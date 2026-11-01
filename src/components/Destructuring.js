import React from "react";

const Destructuring = () => {
  const user = {
    name: "Ali",
    age: 22,
    city: "Karachi"
  };

  const subjects = ["React", "JavaScript", "HTML"];

  const { name, age, city } = user;
  const [first, second, third] = subjects;

  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>

      <h3>Subjects</h3>
      <p>{first}, {second}, {third}</p>
    </div>
  );
};

export default Destructuring;