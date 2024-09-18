import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function Applayout() {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
}

let appRouter= createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
  },
  {
    path:'/about',
    element:<h1>this is about page !!!!</h1>
  },
  {
    path:'/:section',
    element:<h1>dynamic route</h1>
  }
]);

// babel is the one which converts the functions and html elements to react create element and then renders to DOM

let root = ReactDOM.createRoot(document.getElementById("root")); // manipulating reactDOM to inject the content inside div with id route
// ReactDOM.render(divTag, root)  this is no longer supported in 18
root.render(<RouterProvider router={appRouter} />);
