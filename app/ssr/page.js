import { Suspense } from "react";
import { connection } from "next/server";

async function SSRContent() {
  await connection();

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const users = await response.json();

  return (
    <main className="container">
      <h1>Server-Side Rendering (SSR)</h1>

      <p>
        Data is fetched from the server on every request.
      </p>

      <h2>User List</h2>

      {users.slice(0, 5).map((user) => (
        <div className="user-card" key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </main>
  );
}

export default function SSRPage() {
  return (
    <Suspense fallback={<p>Loading SSR page...</p>}>
      <SSRContent />
    </Suspense>
  );
}