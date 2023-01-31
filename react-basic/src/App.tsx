import { FC, useCallback, useMemo, useRef, useState } from "react";
import Button from "./components/Button";
import IncOne from "./components/IncOne";
import Input, { InputRef } from "./components/Input";

const App: FC = () => {
  let inputRef = useRef<InputRef>(null);
  let [count, setCount] = useState<number>(0);
  let [square, setSquare] = useState<number>(2);

  let incCount = useCallback(() => {
    setCount(++count);
  }, [count]);

  let squareNumber = useCallback(() => {
    setSquare(square * square);
  }, [square]);

  let isEven = useMemo(() => {
    console.log("hello");
    return count % 2 === 0;
  }, [count]);
  console.log(inputRef);
  return (
    <center>
      <h5>{isEven ? "Even" : "Odd"}</h5>
      <div>
        <IncOne value={count} use="increment"></IncOne>
        <Button clickHandel={incCount}>Inc Counter</Button>
      </div>
      <div>
        <IncOne value={square} use="square" />
        <Button clickHandel={squareNumber}>Make a square</Button>
      </div>
      <Input ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>Focus</button>
    </center>
  );
};

export default App;
