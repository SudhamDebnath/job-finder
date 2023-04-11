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
import Blogs from "./components/Blogs";
import Statistics from "./components/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("jobs.json"),
      },
      {
        path: "header",
        element: <Header></Header>,
      },
      {
        path: "jobs/:id",
        element: <Jobs></Jobs>,
        loader: ({ params }) =>
          fetch(`/jobs.json`)
            .then((response) => response.json())
            .then((data) => {
              const job = data.jobs.find(
                (job) => job.id === parseInt(params.id)
              );
              return { job };
            }),
      },
      {
        path: "applied",
        element: <Applied></Applied>,
      },
      {
        path: "footer",
        element: <Footer></Footer>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
