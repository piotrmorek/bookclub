import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="flex items-center justify-center min-h-screen">
        <h1 className="text-4xl">Bookclub!</h1>
      </main>
    </>
  );
}

export default App;
