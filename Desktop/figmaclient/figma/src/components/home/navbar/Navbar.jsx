import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container">
        <a className="navbar-brand" href="#">
          Finsweet
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item ms-4">
              <NavLink className="nav-link" to="/about">
                Blog
              </NavLink>
            </li>
            <li className="nav-item ms-4">
              <NavLink className="nav-link" to="/yes">
                Blogpost
              </NavLink>
            </li>
            <li className="nav-item ms-4">
              <NavLink className="nav-link" to="/blog">
                About
              </NavLink>
            </li>
            <li className="nav-item ms-4">
              <NavLink className="nav-link" to="/helo">
                Categories
              </NavLink>
            </li>
            <li className="nav-item ms-4">
              <NavLink className="nav-link" to="/auth">
                Author
              </NavLink>
            </li>
            <li className="nav-item ms-4">
              <NavLink className="nav-link" to="/boss">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
