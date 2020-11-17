import * as React from "react";
import { useRouteData } from "@remix-run/react";

export default function About() {
  const items = useRouteData();
  return (
    <div className="about-page">
      <div style={{ border: "1rem solid green" }}>
        <ul>
          {items.map((it: any) => (
            <li style={{ padding: "1rem" }} key={it.id}>
              {it.data}
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          border: "1rem solid red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Detail route content</h1>
      </div>
    </div>
  );
}
