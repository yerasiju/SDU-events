import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src="../../../public/login-logo.png" alt="" />
      </div>
      <div>
        <Link to="/SDU-events/">Home</Link>
        <Link to="/events">Events</Link>
      </div>
    </nav>
  );
}

export default Navbar;
