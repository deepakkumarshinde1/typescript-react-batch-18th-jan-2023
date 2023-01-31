import React from "react";

type TextProps = {
  value: number;
  use: string;
};
const Text = ({ value, use }: TextProps) => {
 // console.log("text comp: ", use);
  return (
    <>
      <h1>{value}</h1>
    </>
  );
};

export default React.memo(Text);
