import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import { ContexteCtegory } from "./store/categoryContext";
import {HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <ContexteCtegory>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ContexteCtegory>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
