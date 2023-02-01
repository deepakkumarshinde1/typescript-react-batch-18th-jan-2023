import { useRef } from "react";
import Input, { InputRef } from "./components/Input";

const App = () => {
  let myInput = useRef<InputRef>(null);
  let getInputData = () => {
    myInput.current?.focus();
    let text = myInput.current?.getUpperCaseValue();
    console.log(text);
  };
  return (
    <>
      <center>
        <Input ref={myInput} />
        <button onClick={getInputData}>CLICK</button>
      </center>
    </>
  );
};

export default App;
