import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// function tick(){
//   const element = (
//     <div>
//       <h1>Hello world</h1>
//       <h1>It is {new Date().toLocaleTimeString()}</h1>
//     </div>
//   )
//   root.render(element);
// }

// setInterval(tick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// React main concepts by Dipesh Malvia - https://youtu.be/G8PWDBJspME
