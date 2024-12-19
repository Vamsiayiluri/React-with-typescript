type ParentProps = {
  count: number;
  incrementCount: () => void;
};
const ClickCounter = ({ count, incrementCount }: ParentProps) => {
  return <button onClick={incrementCount}>Clicked {count} times</button>;
};

export default ClickCounter;
