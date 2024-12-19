import { memo, useState } from "react";

type ParentComponentProps = {
  name: string;
  value: string;
  onChange: (greeting: string) => void;
};
export const MemoSample = memo(
  ({ name, value, onChange }: ParentComponentProps) => {
    console.log("Rendering MemoizedComponentSample");

    return (
      <div>
        Name: {name}
        <>
          <label>
            <input
              type="radio"
              checked={value === "Hello"}
              onChange={(e) => onChange("Hello")}
            />
            greeting one
          </label>
          <label>
            <input
              type="radio"
              checked={value === "Hello and welcome"}
              onChange={(e) => onChange("Hello and welcome")}
            />
            greeting two
          </label>
        </>
      </div>
    );
  }
);
