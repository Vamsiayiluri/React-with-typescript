import { useRef } from "react";

export default function DomManipulationUseRefs() {
  const divRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);

  const focusHandler = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const changeColor = () => {
    if (divRef.current) {
      divRef.current.style.backgroundColor = "blue";
    }
  };
  const scrollToBottom = () => {
    if (div2Ref.current) {
      div2Ref.current.scrollTop = div2Ref.current.scrollHeight;
    }
  };
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusHandler}>Focus Input</button>
      <div
        ref={divRef}
        style={{
          height: "100px",
          width: "100px",
          backgroundColor: "lightgray",
        }}
      ></div>
      <button onClick={changeColor}>Change Color</button>

      <div
        ref={div2Ref}
        style={{
          height: "100px",
          width: "200px",
          overflow: "auto",
          border: "1px solid black",
        }}
      >
        {Array.from({ length: 50 }, (_, i) => (
          <p key={i}>Item {i + 1}</p>
        ))}
      </div>
      <button onClick={scrollToBottom}>Scroll to Bottom</button>
    </div>
  );
}
