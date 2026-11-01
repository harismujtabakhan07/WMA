import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1>Next.js SSR Lab Assessment</h1>

      <p>Explore different rendering methods.</p>

      <div className="links">
        <Link href="/basic-ssr">
          Basic SSR - Random Joke
        </Link>

        <Link href="/ssr">
          SSR - Server Rendered Post
        </Link>

        <Link href="/csr">
          CSR - Client Rendered Post
        </Link>

        <Link href="/ssg">
          SSG - Static Generated Post
        </Link>

        <Link href="/ssr/2">
          Dynamic SSR - Post ID 2
        </Link>
      </div>
    </div>
  );
}