import "./globals.css";

export const metadata = {
  title: "Brian Kilpatrick - Engineering & Technology Leader",
  description: "Engineering and technology leader with 13+ years experience. Building teams, shipping technology, and exploring what's next. Currently working on AI tooling, cyber security, and Guardian.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
