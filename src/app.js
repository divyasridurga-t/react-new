import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

function Applayout() {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
}
// babel is the one which converts the functions and html elements to react create element and then renders to DOM

let root = ReactDOM.createRoot(document.getElementById("root")); // manipulating reactDOM to inject the content inside div with id route
// ReactDOM.render(divTag, root)  this is no longer supported in 18
root.render(<Applayout />);
