// MenuNavegacio.js
import React from "react";
import "./menu.css";

function MenuNavegacio() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Inici</a>
        </li>
        <li>
          <a href="/curriculum">Currículum</a>
        </li>
        <li>
          <a href="/hobbies">Hobbies</a>
        </li>
      </ul>
    </nav>
  );
}

export default MenuNavegacio;
