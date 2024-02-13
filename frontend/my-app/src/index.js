import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Gallery from "./pages/gallery.jsx";
import LatestNews from "./pages/news.jsx";
import TrainerPage from "./pages/trainer.jsx";
import ServicesPage from "./pages/service.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";

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
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Register />,
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
