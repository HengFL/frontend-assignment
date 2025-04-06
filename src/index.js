import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
/* src */
import App from "./App";
/* utils */
import reportWebVitals from "./utils/reportWebVitals";
/* css */
import "react-datepicker/dist/react-datepicker.css";
import 'animate.css';
import './assets/scss/custom.scss';
import common from 'utils/common';

ReactDOM.render(
  <BrowserRouter basename={common.baseURL()}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
