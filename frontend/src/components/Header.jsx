import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-xl navbar-dark bg-blue">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="../images/logo.png"
              className="img-fluid"
              alt="CVR LOGO"
              style={{ width: "100%", height: "60px" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item marlin">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown marlin">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Academics
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/academics/objectives">
                      Objectives
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/academics/academic-calender"
                    >
                      Academic Calendar
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/academics/syllabus-books"
                    >
                      Syllabus Books
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/academics/time-tables">
                      Time Tables
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown marlin">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Infrastructure
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/infrastructure/laboratories"
                    >
                      Laboratories
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/infrastructure/classrooms"
                    >
                      Classrooms
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/infrastructure/seminar-hall"
                    >
                      Seminar Hall
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/infrastructure/library"
                    >
                      Library
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown marlin">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Faculty
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/faculty/teaching">
                      Teaching
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/faculty/non-teaching">
                      Non-Teaching
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/faculty/admin">
                      Admin
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/faculty/technicalstaff"
                    >
                      Technical Staff
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown marlin">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Student Corner
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/studentcorner/e-resources"
                    >
                      E-Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/studentcorner/student-work"
                    >
                      Student Work
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/studentcorner/gallery">
                      Gallery
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item marlin">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item marlin">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
