export default function App() {
  return (
    <div className="bg-gray-900 text-white flex items-center justify-center h-screen">
      <div className="space-y-4 max-w-lg">
        <h1 className="font-bold text-4xl">Vite Starter Template</h1>
        <p>
          A starter repository for React and Vite. It already has{" "}
          <strong>TailwindCSS</strong> installed.
        </p>
        <p>
          If you are using a package manager other than{" "}
          <strong>
            <em>pnpm</em>
          </strong>
          , ensure to delete the{" "}
          <em>
            <strong>pnpm-lock.yaml</strong>
          </em>{" "}
          file and then install{" "}
          <em>
            <strong>node_modules</strong>
          </em>{" "}
          again.
        </p>
      </div>
    </div>
  );
}
