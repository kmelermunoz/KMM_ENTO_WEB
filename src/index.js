import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App/App.js";
import Curriculum from "./curriculum";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MenuNavegacio from "./menuNavegacio";
import Hobbies from "./hobbies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "curriculum",
    element: <Curriculum />,
  },
  {
    path: "hobbies",
    element: <Hobbies />,
  },
]);

const Footer = ({ isVisible }) => (
  <footer className={`footer ${isVisible ? "visible" : ""}`}>
    <p>&copy; 2024 Kevin Meler Muñoz</p>
  </footer>
);

const AppContainer = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const handleScroll = () => {
    const bottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight;
    setIsFooterVisible(bottom);
  };

  const checkContentHeight = () => {
    const contentHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    setIsFooterVisible(contentHeight <= viewportHeight);
  };

  useEffect(() => {
    checkContentHeight();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkContentHeight);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkContentHeight);
    };
  }, []);

  return (
    <div className="app-container">
      <MenuNavegacio />
      <RouterProvider router={router} />
      <Footer isVisible={isFooterVisible} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
);
