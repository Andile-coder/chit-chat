import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import "./styles/dist/login.css";
// import "./styles/dist/signup.css";
// import "./styles/dist/profileReg.css";
// import "./styles/dist/userProfile.css";
// import "./styles/dist/post.css";
import "./styles/dist/sidebar.css";
import "./styles/dist/header.css";
import "./styles/dist/userblock.css";
import "./styles/dist/onYourMind.css";
import "./styles/dist/snapper.css";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
