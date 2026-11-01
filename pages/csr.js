import { useEffect, useState } from "react";

function CSRPage() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }

        return response.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1>Client-Side Rendered Post</h1>

      {loading && <p>Loading post...</p>}

      {error && <p>{error}</p>}

      {post && (
        <div className="card">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>Post ID: {post.id}</p>
        </div>
      )}
    </div>
  );
}

export default CSRPage;