import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <h1>Next.js Rendering Methods</h1>

      <p className="subtitle">
        Explore and compare SSR, CSR, and SSG in Next.js.
      </p>

      <div className="links">
        <Link href="/ssr" className="link-card">
          <h2>SSR</h2>
          <p>Server-Side Rendering</p>
          <span>Explore SSR →</span>
        </Link>

        <Link href="/csr" className="link-card">
          <h2>CSR</h2>
          <p>Client-Side Rendering</p>
          <span>Explore CSR →</span>
        </Link>

        <Link href="/ssg" className="link-card">
          <h2>SSG</h2>
          <p>Static Site Generation</p>
          <span>Explore SSG →</span>
        </Link>
      </div>
    </main>
  );
}