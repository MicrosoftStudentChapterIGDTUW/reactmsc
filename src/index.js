import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./input.css";
import App from "./App";
import TagManager from "react-gtm-module";
import '@fortawesome/fontawesome-free/css/all.min.css';

const tagManagerArgs = { gtmId: 'GTM-5SMHVB85' };

TagManager.initialize(tagManagerArgs);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
