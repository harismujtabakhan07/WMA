export async function getServerSideProps() {
  const response = await fetch(
    "https://official-joke-api.appspot.com/random_joke"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch joke");
  }

  const joke = await response.json();

  return {
    props: {
      joke,
    },
  };
}

function BasicSSRPage({ joke }) {
  return (
    <div className="container">
      <h1>Basic SSR Example</h1>

      <div className="card">
        <h2>Random Joke</h2>

        <p>{joke.setup}</p>

        <strong>{joke.punchline}</strong>
      </div>

      <p>Refresh the page to fetch another joke.</p>
    </div>
  );
}

export default BasicSSRPage;