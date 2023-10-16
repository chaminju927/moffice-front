import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NavComponent from "./components/NavComponent";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
reportWebVitals();
