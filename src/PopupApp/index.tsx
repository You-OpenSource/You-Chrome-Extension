import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

const documentRoot = document.getElementById("youchat-google-extension-root");

if (documentRoot) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    documentRoot
  );
}
