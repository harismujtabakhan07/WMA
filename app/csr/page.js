"use client";

import { useEffect, useState } from "react";

export default function CSRPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        return response.json();
      })
      .then((data) => {
        setUsers(data.slice(0, 5));
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container">
      <h1>Client-Side Rendering (CSR)</h1>

      <p>
        This page fetches data in the browser using
        useEffect().
      </p>

      {loading && <p>Loading users...</p>}

      {error && <p>{error}</p>}

      {users.map((user) => (
        <div className="user-card" key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </main>
  );
}