import React from "react";

type props = {
  value: number;
  use: string;
  children?: JSX.Element;
};
const IncOne = ({ value, use, children }: props) => {
  console.log(use, "text");
  return (
    <>
      <h1>{value}</h1>
    </>
  );
};

export default React.memo(IncOne);
