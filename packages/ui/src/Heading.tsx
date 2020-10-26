import React from "react";

type HeadingProps = {};

export const Heading: React.FC<HeadingProps> = props => {
  return <h1 style={{ color: "#0000ff" }}>{props.children}</h1>;
};
