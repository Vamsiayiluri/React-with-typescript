import { useRef, useState, useEffect } from "react";

export const PreviousStateExample = () => {
  const [count, setCount] = useState<number>(0);
  const prevCountRef = useRef<number | null>(null);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const prevCount = prevCountRef.current;
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h1>Current Count: {count}</h1>
      <h2>Previous Count: {prevCount}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <div>
        <input ref={inputRef} type="text" placeholder="Type something..." />
        <button onClick={handleFocus}>Focus Input</button>
      </div>
    </div>
  );
};

export default PreviousStateExample;
