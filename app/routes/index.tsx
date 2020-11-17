import React, { useState } from "react";
import { useRouteData } from "@remix-run/react";

export function meta() {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  };
}

export default function Index() {
  let data = useRouteData();
  const [state, setState] = useState("7.0");
  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>Welcome to Remix! 7.0</h2>
      <p>
        <a href="https://remix.run/dashboard/docs">Check out the docs</a> to get
        started.
      </p>
      {state ? <h1>state: {state}</h1> : null}
      <p>Message from the loader: {data.message}</p>
    </div>
  );
}
