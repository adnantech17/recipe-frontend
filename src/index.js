import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { LoginProvider } from "./Context/LoginContext";

ReactDOM.render(
  <LoginProvider>
    <App />
  </LoginProvider>,
  document.getElementById("root")
);
