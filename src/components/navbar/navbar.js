import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/privacy">Privacy</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
