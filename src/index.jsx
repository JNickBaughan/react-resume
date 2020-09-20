import React from "react";
import ReactDOM from "react-dom";
import Container from "./container/container";

import appConfig from "./appConfig";

ReactDOM.render(
  <Container appConfig={appConfig} />,
  document.getElementsByTagName("body")[0]
);
