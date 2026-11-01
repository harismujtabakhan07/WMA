import React from "react";

const WithoutJSX = () => {
  const paragraph = React.createElement(
    "p",
    null,
    "Hello! This paragraph is created without JSX."
  );

  return paragraph;
};

export default WithoutJSX;