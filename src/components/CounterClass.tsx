import React from "react";
interface CounterProps {
  start: number;
}

interface CounterState {
  count: number;
}

class CounterClass extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    console.log("constructor");
    this.state = { count: 0 };
  }

  static getDerivedStateFromProps = (
    props: CounterProps,
    state: CounterState
  ): CounterState => {
    console.log("getDerivedStateFromProps");
    return {
      ...state,
      count: props.start,
    };
  };

  componentDidMount(): void {
    console.log("componentDidMount");
  }
  componentDidUpdate(): void {
    console.log("componentDidUpdate");
  }

  componentWillUnmount(): void {
    console.log("componentWillUnmount");
  }
  incCount = () => {
    // this.setState({ count: ++this.state.count });
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };
  decCount = () => {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  };
  render() {
    console.log("render");
    return (
      <center>
        <h1>I am class component</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.incCount}>Inc Count</button>
        <button onClick={this.decCount}>Dec Count</button>
      </center>
    );
  }
}

export default CounterClass;
