import React from 'react';

const Navbar = () => {
  return (
    <div className="sticky-top">
      {/* Navigation sticky-top */}
      <nav>
        <nav className="navbar navbar-expand-xl navbar-dark bg-blue">
          <div className="container-fluid">
            <a className="navbar-brand" href="index.html">
              <img
                src="images/logo.png"
                className="img-fluid"
                alt="CVR LOGO"
                style={{ width: '100%', height: '60px' }}
              />
              {/* CSEDEPT */}
            </a>
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
                  <a className="nav-link" aria-current="page" href="index.html">
                    Home
                  </a>
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
                      <a className="dropdown-item" href="visionmission.html">
                        Vision Mission
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="objectives.html">
                        Objectives
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="academiccalendar.html">
                        Academic Calendar
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="syllabus.html">
                        Syllabus Books
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="timetables.html">
                        Time Tables
                      </a>
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
                      <a className="dropdown-item" href="labs.html">
                        Laboratories
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="classes.html">
                        Class Rooms
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="seminarhall.html">
                        Seminar Hall
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="library.html">
                        Library
                      </a>
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
                      <a className="dropdown-item" href="teaching.html">
                        Teaching
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="nonteaching.html">
                        Non - Teaching
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="techstaff.html">
                        Technical Staff
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="adminstaff.html">
                        Admin
                      </a>
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
                    Research
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="conferences.html">
                        Conferences
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="workshops.html">
                        Workshops
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="researchprojs.html">
                        Research Projects
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="consultancyprojs.html">
                        Consultancy Projects
                      </a>
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
                      <a className="dropdown-item" href="eresources.html">
                        E-Resources
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="studentwork.html">
                        Student Work
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="gallary.html">
                        Gallery
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item marlin">
                  <a className="nav-link" href="about.html">
                    About
                  </a>
                </li>
                <li className="nav-item marlin">
                  <a className="nav-link" href="contacts.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </nav>
    </div>
  );
};

export default Navbar;
