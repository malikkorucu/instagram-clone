import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import setupAxios from "./setup/axios/SetupAxios";
import axios from "axios";
import store from "./setup/redux/Store";
import initLanguages from "./assets/languages/index";
import './assets/styles/index.css'

setupAxios(axios, store);
initLanguages();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
