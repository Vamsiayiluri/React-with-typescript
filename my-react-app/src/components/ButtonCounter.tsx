import CommonCounter from "./CommonCounter";

export default function ButtonCounter() {
  return (
    <CommonCounter
      render={({ count, increment }) => (
        <button onClick={increment}>Button Clicked: {count} times</button>
      )}
    />
  );
}
