import React from "react";
import ReactDOM from "react-dom";

import { Product } from "./views/Product"

import "./index.scss";

const App = () => (
  <Product/>
);
ReactDOM.render(<App />, document.getElementById("app"));
