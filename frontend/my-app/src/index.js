import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import About from "./routes/about.jsx";
import Contact from "./routes/contact.jsx";
import Gallery from "./routes/gallery.jsx";
import LatestNews from "./routes/news.jsx";
import TrainerPage from "./routes/trainer.jsx";
import ServicesPage from "./routes/service.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/news",
    element: <LatestNews />,
  },
  {
    path: "/trainer",
    element: <TrainerPage />,
  },
  {
    path: "/service",
    element: <ServicesPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
