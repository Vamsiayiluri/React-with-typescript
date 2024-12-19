import React from "react";

type buttonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
export const Button = (props: buttonProps) => {
  return (
    <div>
      <button onClick={(event) => props.handleClick(event)}>Click</button>
    </div>
  );
};
