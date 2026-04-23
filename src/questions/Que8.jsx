// Question:
// Filter list based on search input.

// Input:
// List → React, Angular, Vue
// Search → Re

// Output:
// React


import {useState} from "react";

function SearchBox() {
      const Languages = [
    "C",
    "C++",
    "Java",
    "React",
    "Python",
    "JavaScript",
    "TypeScript",
    "Go",
    "Rust",
    "Kotlin",
    "Swift",
    "PHP",
    "Ruby",
    "C#",
    "Dart",
    "Scala",
    "R",
    "MATLAB",
    "Perl",
    "Shell",
    "SQL",
  ];
    const [list,setList]=useState(Languages);

  return (
    <>
      <h1 className="text-center text-purple-600 text-3xl font-bold">
        SearchBox
      </h1>
      <div className="mt-12 flex flex-col items-center gap-8">
      <input
        type="text"
        className="border border-black p-2 tex-xl font-medium w-80"
        placeholder="Search here...."
        onChange={(e)=>{
const res=Languages.filter((lang)=>{
return lang.includes(e.target.value);
})
// console.log(res);
setList(res);
        }}
      />
      <ul>
        {list.map((item, index) => (
          <li key={index} className="text-red-600 font-bold text-xl">{item}</li>
        ))}
      </ul>
      </div>
    </>
  );
}
export default SearchBox;
