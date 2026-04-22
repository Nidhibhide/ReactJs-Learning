// Question:
// Toggle password visibility.

import { useState } from "react";

// Input:
// Click Show button

// Output:
// Password visible

// Click again

// Output:
// Password hidden

function PasswordVisibility() {
  const [type, setType] = useState("password");
  const showPassword = () => {
    setType("text");
  };
  const hidePassword = () => {
    setType("password");
  };
  return (
    <>
      <h1 className="text-center text-purple-600 text-3xl font-bold">
        Toggle password visibility
      </h1>

      <div className="mt-12 flex flex-col items-center gap-8">
        <input
          className="border border-black p-2 w-100"
          placeholder="Enter your password"
          type={type}
        />
        <div className="flex gap-4">
          <button
            className="text-green-500 py-2 px-3 bg-black rounded-xl w-60 font-bold cursor-pointer"
            onClick={showPassword}
          >
            Show password
          </button>
          <button
            className="text-red-500 py-2 px-3 bg-black rounded-xl w-60 font-bold cursor-pointer"
            onClick={hidePassword}
          >
            Hide password
          </button>
        </div>
      </div>
    </>
  );
}

export default PasswordVisibility;
