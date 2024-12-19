import CommonCounter from "./CommonCounter";

export default function HoverCounter() {
  return (
    <CommonCounter
      render={({ count, increment }) => (
        <div onMouseEnter={increment}>Div Hovered: {count} times</div>
      )}
    />
  );
}
