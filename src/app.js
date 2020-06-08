import React from "react";
import { render } from "react-dom";
import Routes from "./routes";

//code goes here
const App = () => {
  return <Routes />;
};

render(<App />, document.getElementById("root"));
