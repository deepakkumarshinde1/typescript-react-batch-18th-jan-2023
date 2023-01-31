import React from "react";

type ButtonProps = {
  handelEvent(): void;
  children: string;
};
const Button = ({ handelEvent, children }: ButtonProps) => {
  //  console.log("btn comp :: ", children);
  return (
    <>
      <button onClick={handelEvent}>{children}</button>
    </>
  );
};

export default React.memo(Button);
