import { useEffect, useRef } from "react";
import CustomInput from "./CustomInput";

export default function UseRefHook() {
  const firstNameField = useRef<HTMLInputElement>(null);
  const lastNameField = useRef<HTMLInputElement>(null);
  useEffect(() => {
    console.log("Component re rendered");
  });
  function callFunction(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (firstNameField.current) {
      console.log("First name", firstNameField.current.value);
    }
    if (lastNameField.current) {
      console.log("Last name", lastNameField.current.value);
    }
  }
  return (
    <div>
      <form>
        <CustomInput
          type="text"
          placeholder="Enter first name"
          id="firstName"
          ref={firstNameField}
        ></CustomInput>

        <input
          type="text"
          placeholder="Enter last name"
          id="lastname"
          ref={lastNameField}
        ></input>
        <button onClick={(e) => callFunction(e)}>Add</button>
      </form>
    </div>
  );
}
