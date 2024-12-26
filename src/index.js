import React from "react";
import ReactDOM from "react-dom/client";
import Test from "./Test";

function Greeting() {
  return (
    <>
      <Person />
      <Message />
    </>
  );
}

const Person = () => {
  return (
    <div>
      <h2>Mohammad Saquib</h2>
      <p>Occupation: Developer</p>
    </div>
  );
};

const Message = () => {
  return (
    <div>
      <h2>Message</h2>
      <p>This is a message</p>
    </div>
  );
};

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
