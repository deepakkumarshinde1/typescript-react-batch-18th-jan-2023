// functional component
// handel data of component we need to use state
// function don't have a state
// stateless function
// class component === before ===> 16.8 == from ===> Hooks in react
// to provide same behaviors like class

import { FC, useState } from "react";
import Counter from "./components/Counter";
import { useCounterContext } from "./context/CounterContext";

// Hooks in react => inbuilt methods to perform a complex task for react
// 3rd party hooks
// Custom Hooks
// "use" in-front  any inbuilt method

// state => useState()

// array.map()
// Array.isArray()

const App: FC = () => {
  let { counters } = useCounterContext();
  return (
    <center>
      {counters.map((counter: number, index: number) => {
        return <Counter key={index} start={counter} index={index} />;
      })}
    </center>
  );
};

export default App;
