import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const App = () => {
  const [active, setActive] = useState(false);
  const clickHandler = () => setActive(!active);
  console.log("hi!");
  return (
    <span className={`${active && "active"}`} onClick={clickHandler}>
      Hello
    </span>
  );
};

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
