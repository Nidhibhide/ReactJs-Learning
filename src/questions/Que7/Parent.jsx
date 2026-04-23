// Question:
// Send data from parent component to child.

// Input:
// Parent sends name Nidhi

// Output:
// Child component displays → Nidhi
import Child from "./Child";
function Parent(){
    const user={
        rollno:101,
        name:"Nidhi Bhide",
        age:24,
        DOB:"14-06-2002"

    }
    return(
        <>
        <h1 className="text-center text-purple-600 text-3xl font-bold">
        Props Demo
      </h1>
      <Child UserInfo={user}/>
        </>
    )
}
export default Parent;