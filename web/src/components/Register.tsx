import { useState } from "react";

function Register() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="flex items-center justify-center min-h-screen">
        <h1 className="text-4xl">Register!</h1>
      </main>
    </>
  );
}

export default Register;
