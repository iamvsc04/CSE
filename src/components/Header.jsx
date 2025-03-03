import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const controls = useAnimation();
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        x: "-20vw",
        opacity: 0,
        transition: { delay: 0.3 },
      });
      setTextVisible(true);
      await controls.start({
        x: "-15vw",
        opacity: 1,
        transition: { duration: 1.6, ease: "easeInOut" },
      });
    };
    sequence();
  }, [controls]);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-blue px-3">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <motion.div
            initial={{ x: "7vw", opacity: 1 }}
            animate={{ x: "-1vw", opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="d-flex justify-content-center flex-grow-1 position-relative"
          >
            <Link className="navbar-brand" to="/">
              <img
                src="../images/logo.png"
                className="img-fluid"
                alt="CVR LOGO"
                style={{ height: "75px" }}
              />
            </Link>

            <div className="vertical-line"></div>
          </motion.div>

          <motion.div
            animate={controls}
            className="h4 text-white ms-4"
            style={{ opacity: textVisible ? 1 : 0 }}
          >
            Computer Science and Engineering
          </motion.div>

          <button
            className="btn text-white fs-3"
            onClick={() => setIsMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      <div className={`offcanvas-menu ${isMenuOpen ? "show" : ""}`}>
        <div className="offcanvas-header d-flex justify-content-between align-items-center">
          <h5 className="offcanvas-title fs-4 my-4">Menu</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            onClick={() => setIsMenuOpen(false)}
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled my-2 fs-5">
            <li>
              <Link className="nav-link my-2 text-white" to="/">
                Home
              </Link>
            </li>

            {[
              {
                id: "academicsMenu",
                title: "Academics",
                links: [
                  { name: "Objectives", path: "/academics/objectives" },
                  {
                    name: "Academic Calendar",
                    path: "/academics/academic-calender",
                  },
                  { name: "Syllabus Books", path: "/academics/syllabus-books" },
                  { name: "Time Tables", path: "/academics/time-tables" },
                ],
              },
              {
                id: "infrastructureMenu",
                title: "Infrastructure",
                links: [
                  {
                    name: "Laboratories",
                    path: "/infrastructure/laboratories",
                  },
                  { name: "Classrooms", path: "/infrastructure/classrooms" },
                  {
                    name: "Seminar Hall",
                    path: "/infrastructure/seminar-hall",
                  },
                  { name: "Library", path: "/infrastructure/library" },
                ],
              },
              {
                id: "facultyMenu",
                title: "Faculty",
                links: [
                  { name: "Teaching", path: "/faculty/teaching" },
                  { name: "Non-Teaching", path: "/faculty/non-teaching" },
                  { name: "Admin", path: "/faculty/admin" },
                  { name: "Technical Staff", path: "/faculty/technical-staff" },
                ],
              },
              {
                id: "studentCornerMenu",
                title: "Student Corner",
                links: [
                  { name: "E-Resources", path: "/studentcorner/e-resources" },
                  { name: "Student Work", path: "/studentcorner/student-work" },
                  { name: "Gallery", path: "/studentcorner/gallery" },
                ],
              },
            ].map((menu) => (
              <li key={menu.id}>
                <button
                  className="btn text-white fs-5 w-100 text-start dropdown-btn"
                  onClick={() => toggleDropdown(menu.id)}
                >
                  {menu.title} {openDropdown === menu.id ? "⩞" : "⩡"}
                </button>
                <div
                  className={`dropdown-container ${
                    openDropdown === menu.id ? "expanded" : ""
                  }`}
                >
                  <ul className="list-unstyled">
                    {menu.links.map((link) => (
                      <li key={link.path}>
                        <Link className="nav-link text-white" to={link.path}>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}

            <li>
              <Link className="nav-link text-white" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link text-white" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {isMenuOpen && (
        <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>
      )}
    </div>
  );
};

export default Navbar;
