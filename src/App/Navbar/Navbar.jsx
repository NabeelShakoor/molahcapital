import React, { useEffect } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router";
function Navbar() {
  const location = useLocation();
  const active = location.pathname;
  return (
    <div clasName="Herader_cover">
      <nav className="navbar navbar-expand-md  light bg-none">
        <div className="container-fluid">
          <Link className="navbar-brand fs-4 text-light" to="/">
            Moolah Capital
          </Link>
          <button
            className="navbar-toggler text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="bi bi-list text-light" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  className={`nav-link light ${
                    active === "/" ? "active text-light" : "unactive text-light"
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link light ${
                    active === "/funds"
                      ? "active text-light"
                      : "unactive text-light"
                  }`}
                  to="/funds"
                >
                  Funds
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link light ${
                    active === "/faq"
                      ? "active text-light"
                      : "unactive text-light"
                  }`}
                  to="/faq"
                >
                  FAQs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link light ${
                    active === "/about"
                      ? "active text-light"
                      : "unactive text-light"
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link light ${
                    active === "/contact"
                      ? "active text-light"
                      : "unactive text-light"
                  }`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <Link
                  className={`nav-link light ${active === "/"  ? "active text-light" : "unactive text-light" }`}dropdown-toggle"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li> */}
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
