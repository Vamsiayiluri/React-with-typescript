import { Component } from "react";

type ParentComponentProps = {
  name: string;
};

class NormalComponentSample extends Component<ParentComponentProps> {
  render() {
    console.log("Rendering Normal Component");
    return <div>{this.props.name}</div>;
  }
}

export default NormalComponentSample;
