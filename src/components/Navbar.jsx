import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* DESKTOP LINKS */}
        <ul className="nav-links desktop">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        {/* MOBILE ICON */}
        <div
          className="mobile-icon"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </div>
      </div>

      {/* MOBILE MENU */}
      <ul className={`nav-links mobile ${open ? "open" : ""}`}>
        <li onClick={() => setOpen(false)}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink to="/about">About</NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
