import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import { MdPlumbing } from "react-icons/md";
import { IconContext } from "react-icons/lib";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (

    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMenu}>
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
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMenu}
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}
