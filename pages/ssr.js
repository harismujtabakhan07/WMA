export async function getServerSideProps() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }

  const post = await response.json();

  return {
    props: {
      post,
    },
  };
}

function SSRPage({ post }) {
  return (
    <div className="container">
      <h1>Server-Side Rendered Post</h1>

      <div className="card">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p>Post ID: {post.id}</p>
      </div>
    </div>
  );
}

export default SSRPage;