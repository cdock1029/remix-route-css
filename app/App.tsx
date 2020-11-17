import React from "react";
import {
  Meta,
  Scripts,
  Styles,
  Routes,
  useGlobalData,
  Link,
} from "@remix-run/react";

export default function App() {
  let data = useGlobalData();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Styles />
      </head>
      <body>
        <nav
          style={{
            marginBottom: "2rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link to="/" style={{ marginRight: "2rem" }}>
            Home
          </Link>
          <Link to="about" style={{ marginRight: "2rem" }}>
            About
          </Link>
        </nav>
        <Routes />
        <Scripts />
        <footer>
          <p>This page was rendered at {data.date.toLocaleString()}</p>
        </footer>
      </body>
    </html>
  );
}
