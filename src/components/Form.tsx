import { useState } from "react";
import { useAxios } from "../Hooks/useAxios";

const Form = () => {
  const { fetch, post } = useAxios();

  const [name, setName] = useState("");
  const [lastName, setLastNAme] = useState("");
  const nameHandler = (e: any) => {
    setName(e.target.value);
  };
  const lastNameHandler = (e: any) => {
    setLastNAme(e.target.value);
  };

  const fetchHandler = async (e: any) => {
    // e.preventDefault();
    const res = await fetch();
    alert(`fetch completed. recieved ${res?.data.products.length} items.`);
  };
  const postHandler = async (e: any) => {
    // e.preventDefault();
    const res = await post({ name, lastName });
    alert(`post completed. Recieved ${res?.data.title}`);
  };

  const isNameValid = name.trim().length > 0;
  const isLastNameValid = lastName.trim().length > 0;
  const isValid = isNameValid && isLastNameValid;

  return (
    <>
      <form className="form">
        <label htmlFor="fname">First name:</label>
        <br />
        <input type="text" id="fname" name="fname" onChange={nameHandler} />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input type="text" id="lname" name="lname" onChange={lastNameHandler} />
        <br />
        <input
          type="button"
          value="Post"
          disabled={!isValid}
          onClick={postHandler}
        ></input>
        <input type="button" value="Fetch" onClick={fetchHandler}></input>
      </form>
    </>
  );
};
export default Form;
