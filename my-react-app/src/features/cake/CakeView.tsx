import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";
import { useState } from "react";

export const CakeView = () => {
  const [value, setValue] = useState(1);

  const noOfCakes: number = useSelector((state: any) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes - {noOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order cake</button>
      <input
        type="number"
        onChange={(e) => setValue(Number(e.target.value))}
      ></input>
      <button onClick={() => dispatch(restocked(value))}>Restock cakes</button>
    </div>
  );
};
