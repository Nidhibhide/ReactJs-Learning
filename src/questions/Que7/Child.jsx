

function Child({ UserInfo }) {
  return (
    <>
      <div className="flex flex-col items-center mt-12 font-bold text-xl">
        <p>Roll - {UserInfo?.rollno}</p>
        <p>Name - {UserInfo?.name}</p>
        <p>Age - {UserInfo?.age}</p>
        <p>DOB - {UserInfo?.DOB}</p>
      </div>
    </>
  );
}

export default Child;
