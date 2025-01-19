import React from 'react';

const SyllabusBooks = () => {
  return (
    <>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} id="myBtn" title="Go to top">
        <i className="fa fa-angle-double-up" aria-hidden="true"></i>
      </button>
      {/* Navigation and Header Begin */}
      <div className="sticky-top">
        <navigation>
          <nav className="navbar navbar-expand-xl navbar-dark bg-blue">
            <div className="container-fluid">
              <a className="navbar-brand" href="index.html">
                <img src="images/logo.png" className="img-fluid" alt="CVR LOGO" style={{ width: '100%', height: '60px' }} />
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
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                  {/* Repeat other list items here in similar fashion */}
                </ul>
              </div>
            </div>
          </nav>
        </navigation>
        {/* Header */}
        <header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 headerStyle">
                <p>Department of Computer Science and Engineering</p>
                <div className="container-fluid marqueeStyle">
                  <marquee className="marformat" scrollamount="15" onMouseOver={() => this.stop()} onMouseOut={() => this.start()}>
                    <blink>
                      <label style={{ marginRight: '20px' }}>Notifications:</label>
                      <span className="blink">Flash</span>
                      <a className="text-white mr-4" href="#">
                        Department is organizing a 10-day Skill Development Course on Web Technologies starting from 14.06.2023 to 24.06.2023.
                      </a>
                      <span className="blink">Flash</span>
                      <a className="text-white mr-4" href="#">
                        Department is organizing a 10-day Skill Development Course on Web Technologies starting from 14.06.2023 to 24.06.2023.
                      </a>
                    </blink>
                  </marquee>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      {/* Navigation and Header End */}
      {/* Main Content Begin */}
      <main>
        <section className="academicSection">
          <section className="academicContainer mt-4">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <h2 className="text-center">Syllabus</h2>
                </div>
              </div>
            </div>
            <section className="calenderItems mt-3" data-aos="zoom-in" data-aos-duration="1000">
              <div className="container">
                <div className="itemsContainer p-3">
                  <div className="item">
                    <div className="icon text-center">
                      <h3>
                        <img src="images/CVR Logo.png" className="img-fluid" alt="CVR Logo" /> B.Tech CSE
                      </h3>
                    </div>
                    <h4>
                      <a className="btn form-control" href="#">
                        I Year - 2023-24
                      </a>
                    </h4>
                  </div>
                  {/* Repeat other items */}
                </div>
              </div>
            </section>
            <section className="calenderItems mt-3" data-aos="zoom-in" data-aos-duration="2000">
              <div className="container">
                <div className="itemsContainer p-3">
                  <div className="item">
                    <div className="icon text-center">
                      <h3>
                        <img src="images/CVR Logo.png" className="img-fluid" alt="CVR Logo" /> M.Tech AI
                      </h3>
                    </div>
                    <h4>
                      <a className="btn form-control" href="#">
                        I Year - 2023-24
                      </a>
                    </h4>
                  </div>
                  {/* Repeat other items */}
                </div>
              </div>
            </section>
          </section>
          <div className="container mt-5">
            <div className="col-lg-12">
              <div className="col-lg-4"></div>
            </div>
          </div>
        </section>
      </main>
      {/* Main Content End */}
      {/* Footer Content Begin */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Major Links</h4>
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="contacts.html">Contact</a>
                </li>
              </ul>
            </div>
            {/* Repeat other footer columns */}
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="footer-col">
              <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <li>
                  <h2>
                    <a href="#" className="mt-5">
                      Copyright © 2023 CVRCE CSEDEPT
                    </a>
                  </h2>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Content End */}
    </>
  );
};

export default SyllabusBooks;
