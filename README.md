# Next.js SSR Lab Assessment

## Objective
To implement Server-Side Rendering in Next.js and compare
SSR with CSR and SSG.

## Technologies
- Next.js
- React
- JavaScript
- CSS
- JSONPlaceholder API
- Official Joke API

## Tasks Completed

1. Basic SSR with Random Joke API.
2. SSR page with JSONPlaceholder API.
3. CSR page using useEffect and useState.
4. SSG page using getStaticProps.
5. Dynamic SSR page using URL parameters.

## Dynamic SSR Examples

- /ssr/1
- /ssr/2
- /ssr/3

## Performance Comparison

| Method | Rendering | Best Use Case |
|---|---|---|
| SSR | Every request | Dynamic websites |
| CSR | Browser | Interactive dashboards |
| SSG | Build time | Blogs and portfolios |

## Performance Findings

SSR provides fresh data on every request but requires
server processing.

CSR loads data after the initial page rendering.

SSG serves pre-generated pages and usually provides
the fastest initial delivery.

## How to Run

npm install

npm run dev

Open http://localhost:3000