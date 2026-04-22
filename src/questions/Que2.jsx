// Question:
// Display input value while user types.

// Input:
// User types Hello React

// Output:
// Text shown → Hello React
import { useState } from "react";
function InputValue() {
  const [value, setValue] = useState("Please start typing...");
  const handleChange = (e) => {
    if (e.target.value == "") {
      setValue("Please start typing...");
    } else {
      setValue(e.target.value);
    }
  };
  return (
    <>
      <h1 className="text-center text-purple-600 text-3xl font-bold">
        {" "}
        Display input value while user types.
      </h1>
      <div className="mt-12 flex flex-col items-center gap-2">
        <input
          placeholder="Start typing..."
          className="border border-black p-2 text-xl w-150"
          onChange={handleChange}
        />
        <p className="text-blue-500 text-lg font-medium">Output = {value}</p>
      </div>
    </>
  );
}

export default InputValue;
