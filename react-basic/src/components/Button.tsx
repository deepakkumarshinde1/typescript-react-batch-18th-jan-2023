import React from "react";

type props = {
  clickHandel(): void;
  children: string;
};
const Button = ({ clickHandel, children }: props) => {
  console.log(" button clicked ", children);
  return (
    <>
      <button onClick={clickHandel}>{children}</button>
    </>
  );
};

export default React.memo(Button);
