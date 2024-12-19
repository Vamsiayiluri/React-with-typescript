import { ComponentType, useState } from "react";
type ParentProps = {
  count: number;
  incrementCount: () => void;
};
type WrappedComponent = ComponentType<ParentProps>;

const HocFunctionalCounter = (WrappedComponent: WrappedComponent) => {
  return () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
      setCount((prevCount) => prevCount + 1);
    };

    return <WrappedComponent count={count} incrementCount={increment} />;
  };
};
export default HocFunctionalCounter;
