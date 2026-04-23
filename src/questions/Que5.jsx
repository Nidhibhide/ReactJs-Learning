// Question:
// Display content only after button click.

// Input:
// User clicks Show button & hide button

// Output:
// Welcome User message appears
import { useState } from "react";
function ConditionalRendering() {
  const [value, setValue] = useState("");
  return (
    <>
      <h1 className="text-center text-purple-600 text-3xl font-bold">
        Conditional Rendering
      </h1>
      <div className="mt-12 flex flex-col items-center gap-4">
        <button
          className="text-green-500 py-2 px-3 bg-black rounded-xl w-50 font-bold cursor-pointer"
          onClick={() => {
            setValue(value == "" ? "Welcome User !!!" : "");
          }}
        >
          {value ? "Hide" : "Show"}
        </button>
        <p className="text-blue-500 font-medium text-xl">{value}</p>
      </div>
    </>
  );
}

export default ConditionalRendering;
