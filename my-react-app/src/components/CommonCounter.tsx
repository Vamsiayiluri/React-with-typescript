import { ReactNode, useState } from "react";
type RenderProps = {
  count: number;
  increment: () => void;
};

type CommonCounterProps = {
  render: (props: RenderProps) => ReactNode;
};

const CommonCounter = ({ render }: CommonCounterProps) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return render({ count, increment });
};

export default CommonCounter;
