import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Use NavLink instead of Link for active link styles

function Header() {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: 'black' }} // Black background
      >
        <div className="container-fluid">
          {/* Logo/Brand */}
          <h1
            className="navbar-brand"
            style={{ color: '#0077b6', fontWeight: 'bold', marginLeft: '3vw' }} // Purple logo with spacing
          >
            PRE <span style={{ color: 'white', fontWeight: 'bold' }}>detect</span>
          </h1>

          {/* Toggle Button for Mobile View */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon custom-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {/* Home Link */}
              <li className="nav-item me-3">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link text-primary" : "nav-link text-light"
                  } // Active link: blue, inactive: white
                >
                  Home
                </NavLink>
              </li>

              {/* About Link */}
              <li className="nav-item me-3">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "nav-link text-primary" : "nav-link text-light"
                  }
                >
                  About
                </NavLink>
              </li>

              {/* Contact Link */}
              <li className="nav-item me-3">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "nav-link text-primary" : "nav-link text-light"
                  }
                >
                  Contact
                </NavLink>
              </li>

              {/* Dropdown for "Predict" */}
              <li className="nav-item dropdown" style={{ marginRight: '3vw' }}>
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Predict
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/prediction/cancer">
                      Cancer
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/prediction/diabetes">
                      Diabetes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/prediction/heart-attack"
                    >
                      Heart Attack
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* Login Button */}
              <li className="nav-item me-3">
                <NavLink
                  to="/login"
                  className="nav-link text-light"
                  style={{ color: '#fff', backgroundColor: '#0077b6', borderRadius: '5px', padding: '8px 16px' }}
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
