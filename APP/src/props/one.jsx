//Props means by Properties
//we cant change props after created it or passing from another component.

function PropsDemo(props) {
  let name = "Nidhi";
  return (
    <>
      <h1>My Name is {props?.name}</h1>
      <h1>My Surname is {props?.surname}</h1>
      <h1>My Age is 24 Years</h1>
      <h1>My DOB is 14 June 2002</h1>
    </>
  );
}

export default PropsDemo;
