import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import serviceWorker from "./serviceWorker";

ReactDom.render(
  <ReactStrictMode>
  <App />
  </ReactStrictMode>,
  document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();