import { FC, useState } from "react";
import { useCounterContext } from "../context/CounterContext";

interface CounterProps {
  start: number;
  index: number;
}

const Counter = (props: CounterProps) => {
  let { start, index } = props;
  let { incCount, decCount } = useCounterContext();

  return (
    <center>
      <h1>{start}</h1>
      <button onClick={() => (incCount === undefined ? null : incCount(index))}>
        Inc Count
      </button>
      <button onClick={() => (decCount === undefined ? null : decCount(index))}>
        Dec Count
      </button>
    </center>
  );
};

export default Counter;
