// functional component
// handel data of component we need to use state
// function don't have a state
// stateless function
// class component === before ===> 16.8 == from ===> Hooks in react
// to provide same behaviors like class

import { FC, useState } from "react";
import Counter from "./components/Counter";
import CounterClass from "./components/CounterClass";
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
  const [toggle, setToggle] = useState<boolean>(true);
  return (
    <center>
      <hr />
      <button onClick={() => setToggle(!toggle)}>Toggle components</button>
      {toggle ? (
        counters.map((counter: number, index: number) => {
          return <Counter key={index} start={counter} index={index} />;
        })
      ) : (
        <CounterClass start={10} />
      )}
    </center>
  );
};

export default App;
