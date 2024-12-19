import { Component } from "react";
import ClassCounter from "./ClassCounter";

class ClassButtonCounter extends Component {
  render() {
    return (
      <ClassCounter
        render={({ count, increment }) => (
          <button onClick={increment}>Button Clicked: {count} times</button>
        )}
      />
    );
  }
}

export default ClassButtonCounter;
