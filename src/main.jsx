import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Jobs from "./components/Jobs";
import Applied from "./components/Applied";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/header",
        element: <Header></Header>,
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
      },
      {
        path: "/applied",
        element: <Applied></Applied>,
      },
      {
        path: "/footer",
        element: <Footer></Footer>,
      },
      

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
