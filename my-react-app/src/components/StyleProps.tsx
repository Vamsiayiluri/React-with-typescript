import React from "react";

type styleProps = {
  styles: React.CSSProperties;
};
export const StyleProps = (props: styleProps) => {
  return (
    <div>
      <button style={props.styles}>Click</button>
    </div>
  );
};
