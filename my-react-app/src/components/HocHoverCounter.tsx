type ParentProps = {
  count: number;
  incrementCount: () => void;
};
const HocHoverCounter = ({ count, incrementCount }: ParentProps) => {
  return <div onMouseOver={incrementCount}>Hovered {count} times</div>;
};

export default HocHoverCounter;
