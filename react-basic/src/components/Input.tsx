import React, { useImperativeHandle } from "react";
export type InputRef = {
  focus(): void;
};
const Input: React.ForwardRefRenderFunction<InputRef, {}> = (props, ref) => {
  useImperativeHandle(ref, () => ({
    focus: () => {
      alert("hi");
    },
  }));
  return (
    <>
      <input type="text" />
    </>
  );
};

export default React.forwardRef(Input);
