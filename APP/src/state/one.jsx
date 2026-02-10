//state and events in react js

import React, { useState } from "react";

function FormDemo() {
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const handleClick = (e) => {
    setSubmitted(true);
  };
  const handleChange = (e) => {
    // alert("Clicked ");

    let newValues = {
      name: e.target.value,
      email: e.target.value,
    };
    console.log(newValues);
    setData({
      ...data,
      ...newValues,
    });
  };
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="pb-4">
        <label className="text-red-800">Name</label>
        <br />
        <input
          type="text"
          placeholder="Enter name"
          className="border border-indigo-600"
          name="name"
          onChange={handleChange}
        />
      </div>
      <div className="pb-4">
        <label className="text-red-800">Email</label>
        <br />
        <input
          type="email"
          placeholder="Enter email"
          className="border border-indigo-600"
          name="email"
          onChange={handleChange}
        />
      </div>

      <button
        className="bg-red-500 py-2 px-4 hover:cursor-pointer pb-4"
        onClick={handleClick}
      >
        Submit
      </button>

      <div>
        Result :{" "}
        {submitted && (
          <div>
            <p>{data?.name}</p>
            <p>{data?.email}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FormDemo;
