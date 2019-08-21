import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/">
            <i className="fas fa-plug" /> Terp Connector
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/profiles">Students</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
