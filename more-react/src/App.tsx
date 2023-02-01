import { useReducer, useState } from "react";
import { ActionType, initValue, reducer } from "./reducer/CounterReducer";

const App = () => {
  let [state, setState] = useReducer(reducer, initValue);
  return (
    <>
      <center>
        <h1>{state.count}</h1>
        <button onClick={() => setState({ type: ActionType.INC, payload: 1 })}>
          INC
        </button>
        <button onClick={() => setState({ type: ActionType.DEC, payload: 1 })}>
          DEC
        </button>

        <h1>{state.square}</h1>
        <button
          onClick={() =>
            setState({ type: ActionType.SQR, payload: state.square })
          }
        >
          square Number
        </button>
      </center>
    </>
  );
};

export default App;

// action (type:payload) , state (all data), dispatch(action) => carry data from event to reducer
