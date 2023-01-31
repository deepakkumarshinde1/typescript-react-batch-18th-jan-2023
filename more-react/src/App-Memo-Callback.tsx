import { useCallback, useState, useMemo } from "react";
import Button from "./components/Button";
import Text from "./components/Text";

const App = () => {
  let [count, setCount] = useState(0);
  let [square, setSquare] = useState(2);

  let incCount = useCallback(() => {
    setCount(++count);
  }, [count]);

  let squareNumber = useCallback(() => {
    setSquare(square * square);
  }, [square]);

  let isEven = useMemo(() => {
    console.log("even function");
    return count % 2 === 0;
  }, [count]);
  return (
    <>
      <center>
        <h1>{isEven ? "Even" : "Odd"}</h1>
        <Text value={count} use="count" />
        <Button handelEvent={incCount}>Inc Button</Button>

        <Text value={square} use="square" />
        <Button handelEvent={squareNumber}>Square Number</Button>
      </center>
    </>
  );
};

export default App;

// 1 cache function (useCallback)
// 1 set some dependance(state) for function
//   so that when that state will change function re-cache and the it renders

//  cache value => useMemo
