import { PureComponent } from "react";

type ParentComponentProps = {
  name: string;
};

class PureComponentSample extends PureComponent<ParentComponentProps> {
  render() {
    console.log("Rendering Pure component");
    return <div>{this.props.name}</div>;
  }
}

export default PureComponentSample;
