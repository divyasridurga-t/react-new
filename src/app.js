import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/about";
import Error from "./components/error";
import Layout from "./components/Layout";
import RestaurantDetailPage from "./components/restaurantDetailPage";

function Applayout() {
  return (
    <div className="app">
      <Layout>
        <Body />
      </Layout>
    </div>
  );
}

let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error />,
  },
  {
    path: "/:section",
    element: (
      <Layout>
        <h1>dynamic route</h1>
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/restaurants/:resname",
    element: <RestaurantDetailPage />,
  },
]);

// babel is the one which converts the functions and html elements to react create element and then renders to DOM

let root = ReactDOM.createRoot(document.getElementById("root")); // manipulating reactDOM to inject the content inside div with id route
// ReactDOM.render(divTag, root)  this is no longer supported in 18
root.render(<RouterProvider router={appRouter} />);
