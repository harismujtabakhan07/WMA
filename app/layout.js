import "./globals.css";

export const metadata = {
  title: "Next.js Rendering Methods",
  description: "SSR, CSR and SSG comparison lab assessment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}