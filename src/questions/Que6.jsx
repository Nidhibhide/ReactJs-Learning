// Question:
// Fetch data from API and display.

import axios from "axios";
import { useEffect } from "react";

// Input:
// API returns:

// [{name:"John"}, {name:"Sam"}]

// Output:
// John
// Sam
import { useState } from "react";
function ApiDemo() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function dummyapi() {
      try {
        const res = await axios.get("https://dummyjson.com/users");
        setResult(res.data.users);
      } catch (error) {
        console.log(error);
      }
    }
    dummyapi();
  }, []);
  return (
    <>
      <h1 className="text-center text-purple-600 text-3xl font-bold">
        Api Call Demo
      </h1>
      <ul className="mt-8 flex flex-col items-center">
        {result.map((item, index) => (
          <li key={index} className="font-bold text-red-600">{`${item?.firstName} ${item?.lastName} `}</li>
        ))}
      </ul>
    </>
  );
}

export default ApiDemo;
