import React, { useState, useEffect } from "react";
import "./menu.scss";

function MenuNavegacio() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`nav-bar ${isMobile && isOpen ? "open" : ""}`}>
      <div className="nav-list">
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Inici
            </a>
          </li>
          <li className="nav-item">
            <a href="/curriculum" className="nav-link">
              Currículum
            </a>
          </li>
          <li className="nav-item">
            <a href="/hobbies" className="nav-link">
              Hobbies
            </a>
          </li>
        </ul>
        {isMobile && (
          <div className="menu-toggle" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default MenuNavegacio;
