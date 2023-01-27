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
      <h1 className={start % 2 === 0 ? "text-green" : "text-red"}>{start}</h1>
      <button
        className="btn btn-inc"
        onClick={() => (incCount === undefined ? null : incCount(index))}
      >
        <i className="fa fa-plus-circle" aria-hidden="true"></i>
      </button>
      <button
        className="btn btn-dec"
        onClick={() => (decCount === undefined ? null : decCount(index))}
      >
        <i className="fa fa-minus-circle" aria-hidden="true"></i>
      </button>
    </center>
  );
};

export default Counter;
