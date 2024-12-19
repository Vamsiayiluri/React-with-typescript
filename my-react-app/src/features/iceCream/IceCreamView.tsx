import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";
import { useState } from "react";

export const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const noOfIcecreams: number = useSelector(
    (state: any) => state.iceCream.numOfIceCreams
  );
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of icecreams - {noOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order icecream</button>
      <input
        type="number"
        onChange={(e) => setValue(Number(e.target.value))}
      ></input>
      <button onClick={() => dispatch(restocked(value))}>
        Restock icecreams
      </button>
    </div>
  );
};
