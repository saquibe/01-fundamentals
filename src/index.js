import React from "react";
import ReactDOM from "react-dom/client";
import Test from "./Test";

function Greeting() {
  return <h2>My first component</h2>;
}

// const Greeting = () => {
//   return <h4>First component</h4>;
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Greeting />
    <Test />
  </div>
);
