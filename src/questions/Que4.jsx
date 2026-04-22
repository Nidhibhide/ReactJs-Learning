// Question:
// Add items dynamically to a list.

// Input:
// User enters Learn React → Click Add

// Output:
// List displays:

//     1.Learn React
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
function ListDemo() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const handleClick = () => {
    if (input == "") {
      alert("Please dont add empty item");
    } else {
      setItems([...items, input]);
      setInput("");
    }
  };

  return (
    <>
      <h1 className="text-center text-purple-600 text-3xl font-bold">
        Dynamic List
      </h1>
      <div className="flex flex-col mt-12 items-center gap-4">
        <input
          type="text"
          className="border border-black p-2 w-70"
          placeholder="Enter New Item"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
        <button
          className="text-green-500 py-2 px-3 bg-black rounded-xl w-50 font-bold cursor-pointer"
          onClick={handleClick}
        >
          Add Item
        </button>
      </div>

      <ul className="flex flex-col mt-12 items-center">
        <p className="text-blue-500 font-bold text-3xl">Result : </p>
        {items.map((item, index) => (
          <div className="flex gap-4">
            <li key={index} className=" font-bold text-2xl">
              {item}
            </li>
            <button
              className="text-red-500 font-bold"
              onClick={() => {
                const result = items.filter((num) => {
                  return num != item;
                });

                setItems(result);
              }}
            >
              <IoCloseSharp size={24} className="cursor-pointer" />
            </button>
          </div>
        ))}
      </ul>
    </>
  );
}
export default ListDemo;
