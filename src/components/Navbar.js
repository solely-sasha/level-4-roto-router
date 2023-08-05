import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdPlumbing } from "react-icons/md";
import { IconContext } from "react-icons/lib";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const handleCloseMenu = () => setOpen(false);


  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <nav className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={handleCloseMenu}>
            <MdPlumbing className="navbar-icon" />
            FlowMaster Plumbing
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {open ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={open ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-links"
                activeClassName="activated"
                onClick={handleCloseMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-links"
                activeClassName="activated"
                onClick={handleCloseMenu}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/services"
                className="nav-links"
                activeClassName="activated"
                onClick={handleCloseMenu}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-links"
                activeClassName="activated"
                onClick={handleCloseMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </IconContext.Provider>
  );
}
