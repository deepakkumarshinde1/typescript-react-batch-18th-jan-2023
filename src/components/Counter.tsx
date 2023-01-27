import { FC, useEffect, useState } from "react";
import { useCounterContext } from "../context/CounterContext";

interface CounterProps {
  start: number;
  index: number;
}

const Counter = (props: CounterProps) => {
  console.log("initialized");
  let { start, index } = props;
  let { sSate, incCount, decCount } = useCounterContext();
  // className={start % 2 === 0 ? "text-green" : "text-red"}

  useEffect(() => {
    console.log("mounted");
    return () => {
      console.log("function component unmounted ");
    };
  }, []); // un only once => mounting

  useEffect(() => {
    console.log("any state update");
  }); // any for all state

  useEffect(() => {
    console.log("only for sSate  state update");
  }, [sSate]); //  for sSate state
  return (
    <>
      {console.log("render")}
      <center>
        <h1>Function component {sSate}</h1>
        <h1 style={{ color: start % 2 === 0 ? "green" : "red" }}>{start}</h1>
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
    </>
  );
};

export default Counter;
