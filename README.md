# Next.js Rendering Methods

## Objective
To understand and compare three rendering methods in Next.js:
SSR, CSR, and SSG.

## Technologies Used
- Next.js
- React
- JavaScript
- CSS
- JSONPlaceholder API

## Rendering Methods

### 1. Server-Side Rendering (SSR)
- Data is fetched on the server for every request.
- Provides fresh and updated data.
- Suitable for dynamic websites and frequently changing content.

### 2. Client-Side Rendering (CSR)
- Data is fetched in the browser.
- Uses React useEffect() and useState().
- Suitable for dashboards and interactive applications.

### 3. Static Site Generation (SSG)
- Pages are generated during the build process.
- Uses cached data.
- Suitable for blogs, portfolios and documentation.

## Performance Comparison

| Method | Rendering | Performance |
|---|---|---|
| SSR | Server per request | Depends on server response |
| CSR | Browser | Data appears after API request |
| SSG | Build time | Usually fastest page delivery |

## Best Use Cases

- SSR: News websites and dynamic pages.
- CSR: Admin dashboards and interactive applications.
- SSG: Blogs, portfolios and documentation.

## Performance Testing

Performance is tested using Chrome DevTools Network Tab.

Actual loading times will be recorded after testing.

## How to Run

Install dependencies:

npm install

Start development server:

npm run dev

Open:

http://localhost:3000