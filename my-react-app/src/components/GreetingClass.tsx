import { Component } from "react";

type GreetingProps = {
  name: string;
};

class GreetingClass extends Component<GreetingProps> {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default GreetingClass;
