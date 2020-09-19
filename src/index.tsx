import React from "react";
import ReactDOM from "react-dom";
import Container from "./container/container";

import data from "./data";

ReactDOM.render(
  <Container data={data} />,
  document.getElementsByTagName("body")[0]
);
