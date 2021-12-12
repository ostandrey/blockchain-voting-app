import React from "react";
import {  Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand">BVoting</Link>
          <div id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/home" class="nav-link">Home</Link>
              </li>
              <li class="nav-item">
              <Link to="/about" class="nav-link">About</Link>
              </li>
              <li class="nav-item">
              <Link to="/vote" class="nav-link">Cast vote</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar