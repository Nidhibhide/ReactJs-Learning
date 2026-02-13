import { use, useState } from "react";

function ConditionalRenderingDemo() {
  const [state, setState] = useState(false);

  const fruits = ["Apple", "Banana", "Mango", "Orange"];

  const names = ["Nidhi", "Rahul", "Priya", "Amit", "Sneha"];

  const users = [
    {
      id: 1,
      name: "Nidhi",
      email: "nidhi@gmail.com",
      role: "Developer",
    },
    {
      id: 2,
      name: "Rahul",
      email: "rahul@gmail.com",
      role: "Tester",
    },
    {
      id: 3,
      name: "Priya",
      email: "priya@gmail.com",
      role: "Designer",
    },
  ];

  const handleClick = () => {
    console.log(state); //false
    setState(!state); //then make it true
  };

  return (
    <>
      <h1 className="text-5xl text-red-500 font-bold">
        This is Conditional Rendering demo{" "}
      </h1>
      <div className="flex flex-col mt-4">
        <button
          onClick={handleClick}
          className="bg-purple-600 text-white py-2 px-4 rounded-2xl w-50 cursor-pointer"
        >
          Click Me
        </button>
        {state && (
          <h1 className="text-5xl text-green-500 font-bold mt-8">
            Hello !! Today is thurday and My name is Nidhi
          </h1>
        )}
      </div>
      <h1 className="text-5xl text-red-500 font-bold mt-8">
        This is Rendering List demo{" "}
      </h1>

      {/* method -1  */}
      <p className="text-xl font-semibold mt-2 text-blue-600">
        {" "}
        A.This is method - 1
      </p>
      <ul className="text-2xl font-medium">
        {fruits.map((fruit, index) => {
          return <li key={index}>{fruit}</li>;
        })}
      </ul>

      {/* method -2  */}
      <p className="text-xl font-semibold mt-4 text-blue-600">
        {" "}
        B.This is method - 2
      </p>
      <ul className="text-2xl font-medium">
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      {/* Display object */}
      <h1 className="text-5xl text-red-500 font-bold mt-8">
        This is Rendering Object List demo{" "}
      </h1>
      <ul className="text-2xl font-medium">
        {users.map((user) => (
          <li key={user.id}>
            Email : {user.email} and Name : {user.name} and Role : {user.role}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ConditionalRenderingDemo;
