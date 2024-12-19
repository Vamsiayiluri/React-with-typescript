import { Component, ComponentType } from "react";
type ParentProps = {
  count: number;
  incrementCount: () => void;
};
type WrappedComponent = ComponentType<ParentProps>;

type ClassState = {
  count: number;
};
const HocCounter = (WrappedComponent: WrappedComponent) => {
  return class extends Component<WrappedComponent, ClassState> {
    constructor(props: any) {
      super(props);
      this.state = { count: 0 };
    }

    incrementCount = () => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  };
};

export default HocCounter;
