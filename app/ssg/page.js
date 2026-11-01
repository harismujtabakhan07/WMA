async function SSGPage() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      cache: "force-cache",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const users = await response.json();

  return (
    <main className="container">
      <h1>Static Site Generation (SSG)</h1>

      <p>
        This page uses cached data and can be generated
        during the build process.
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

export default SSGPage;