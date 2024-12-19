import { Component, ReactNode } from "react";
type RenderProps = {
  count: number;
  increment: () => void;
};

type CommonCounterProps = {
  render: (props: RenderProps) => ReactNode;
};
type classState = {
  count: number;
};
class ClassCounter extends Component<CommonCounterProps, classState> {
  constructor(props: CommonCounterProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return this.props.render({
      count: this.state.count,
      increment: this.increment,
    });
  }
}

export default ClassCounter;
