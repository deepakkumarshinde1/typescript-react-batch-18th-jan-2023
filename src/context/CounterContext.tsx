import { createContext, useState, useContext } from "react";

// create a context
type contextType = {
  counters: number[];
  incCount?(index: number): void;
  decCount?(index: number): void;
  sSate: number;
};
let CounterContext = createContext<contextType>({
  counters: [],
  sSate: 1,
});

// create provider component
type Props = {
  children: JSX.Element;
};
export const CounterContextProvider = (props: Props) => {
  let { children } = props;
  let [counters, setCounters] = useState<number[]>([1]);
  let [sSate, setsSate] = useState<number>(1);
  let incCount = (index: number): void => {
    counters[index] += 1;
    setCounters([...counters]);
    setsSate(sSate * 2);
  };

  let decCount = (index: number): void => {
    let _counters = [...counters];
    _counters[index] -= 1;
    setCounters(_counters);
  };
  let value: contextType = {
    counters,
    incCount,
    decCount,
    sSate,
  };
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

// create context Hook
export const useCounterContext = () => {
  return useContext(CounterContext);
};
