export async function getServerSideProps(context) {
  const { id } = context.params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!response.ok) {
    return {
      notFound: true,
    };
  }

  const post = await response.json();

  if (!post.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}

function DynamicSSRPage({ post }) {
  return (
    <div className="container">
      <h1>Dynamic SSR Post</h1>

      <div className="card">
        <h2>{post.title}</h2>

        <p>{post.body}</p>

        <p>
          <strong>Post ID:</strong> {post.id}
        </p>
      </div>
    </div>
  );
}

export default DynamicSSRPage;