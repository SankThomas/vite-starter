import React from "react";

export default function App() {
  return (
    <div className="flex items-center justify-center text-center h-screen">
      <article className="space-y-4">
        <h1 className="font-bold text-4xl">Vite Starter</h1>
        <p>
          <strong>TailwindCSS</strong> is installed.
        </p>
        <p>
          This repo uses <strong>pnpm</strong>. If you are using another package
          manager, delete
          <br />
          the{" "}
          <strong>
            <em>pnpm-lock.yaml</em>
          </strong>{" "}
          file before installing{" "}
          <strong>
            <em>node_modules</em>
          </strong>
          .
        </p>
      </article>
    </div>
  );
}
