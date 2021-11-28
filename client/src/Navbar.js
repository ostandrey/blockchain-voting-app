import React from "react";
import {  Link } from "react-router-dom";

const Navbar = ({account}) => {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link to="/" class="navbar-brand">BVoting</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
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
        <li class="nav-item">
          <Link to="/account" class="nav-link">My vote card</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar