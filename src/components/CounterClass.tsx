import React from "react";
interface CounterProps {
  start: number;
}

interface CounterState {
  count: number;
}

class CounterClass extends React.Component<CounterProps, CounterState> {
  state: CounterState = {
    count: this.props.start,
  };
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
    return (
      <center>
        <h1>{this.state.count}</h1>
        <button onClick={this.incCount}>Inc Count</button>
        <button onClick={this.decCount}>Dec Count</button>
      </center>
    );
  }
}

export default CounterClass;
