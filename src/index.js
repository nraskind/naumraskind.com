import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./views/App";
import reportWebVitals from "./reportWebVitals";
/*
 FONT AWESOME
*/
import { library } from "@fortawesome/fontawesome-svg-core";
/*
 EACH ADDITIONAL ICON GOES HERE
 ADD TO THE IMPORT AND LIBRARY STATEMENTS
*/
import { fab, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faGithub, faLinkedin, faEnvelope);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
