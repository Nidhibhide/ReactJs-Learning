// Question:
// Create a counter with increment & decrement functionality.

// Input:
// User clicks increment and decrement button 4 times

// Output:
// Displayed count → 0

import { useState } from "react";
function CounterApp() {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };
  const handleDecrement = () => {
    if(counter>=1)
    {
    setCounter((prev) => prev - 1);
    }
  };
  return (
    <>
      <h1 className="text-center text-purple-600 text-3xl font-bold">
        Counter App
      </h1>
      <div className="flex flex-col  items-center mt-12 gap-4">
        <div className="flex gap-4">
          <button
            className="text-green-500 py-2 px-3 bg-black rounded-xl w-60 font-bold cursor-pointer"
            onClick={handleIncrement}
          >
            Increment Value{" "}
          </button>
          <button
            className="text-red-500 py-2 px-3 bg-black rounded-xl w-60 font-bold cursor-pointer"
            onClick={handleDecrement}
          >
            Decrement Value{" "}
          </button>
        </div>
        <p className="font-extrabold text-blue-600 text-3xl">Ans = {counter}</p>
      </div>
    </>
  );
}
export default CounterApp;
