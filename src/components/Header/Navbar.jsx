import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtx9uSvw1CXcNEd1iEz-r7raYmoS2QKa9eQ&s"
          alt=""
        />
      </div>
      <div>
        <Link to="/SDU-events/">Home</Link>
        <Link to="/SDU-events/events">Events</Link>
      </div>
    </nav>
  );
}

export default Navbar;
