import React, { useImperativeHandle, useRef } from "react";

export type InputRef = {
  focus(): void;
  getUpperCaseValue(): void;
};

const Input: React.ForwardRefRenderFunction<InputRef, {}> = ({}, ref) => {
  let input = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => {
    return {
      focus: () => input.current?.focus(),
      getUpperCaseValue: () => input.current?.value.toUpperCase(),
    };
  });
  return (
    <>
      <input type="text" ref={input} placeholder="Enter User Name" />
    </>
  );
};

export default React.forwardRef(Input);
