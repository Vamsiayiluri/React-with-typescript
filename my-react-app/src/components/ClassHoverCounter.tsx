import { Component } from "react";
import ClassCounter from "./ClassCounter";

class ClassHoverCounter extends Component {
  render() {
    return (
      <ClassCounter
        render={({ count, increment }) => (
          <div onMouseEnter={increment}>Div Hovered: {count} times</div>
        )}
      />
    );
  }
}

export default ClassHoverCounter;
