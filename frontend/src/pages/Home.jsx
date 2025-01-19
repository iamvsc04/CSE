import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles.css";
import {
  AcademicCalender,
  Objectives,
  SyllabusBooks,
  TimeTable,
} from "./Academics";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className="carouselSection">
          <div className="container-fluid">
            <div className="row ecaDiv p-5">
              <div className="col-lg-2 eventsDiv mt-2">
                <p>Events@CSE</p>
                <div className="announceMarquee">
                  <ul>
                    <li>
                      <a href="#">MIWAI - 2023</a>
                    </li>
                    <li>
                      <a href="#">MIWAI to start on 20th July, 2023</a>
                    </li>
                    <li>
                      <a href="#">MIWAI to start on 20th July, 2023</a>
                    </li>
                    <li>
                      <a href="#">MIWAI to start on 20th July, 2023</a>
                    </li>
                    <li>
                      <a href="#">MIWAI to start on 20th July, 2023</a>
                    </li>
                    <li>
                      <a href="#">MIWAI to start on 20th July, 2023</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-8 mt-2">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div
                        id="carouselA"
                        className="carousel slide carouselBoth"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-indicators">
                          <li
                            data-bs-target="#carouselA"
                            data-bs-slide-to="0"
                            className="active"
                          ></li>
                          <li
                            data-bs-target="#carouselA"
                            data-bs-slide-to="1"
                          ></li>
                          <li
                            data-bs-target="#carouselA"
                            data-bs-slide-to="2"
                          ></li>
                          <li
                            data-bs-target="#carouselA"
                            data-bs-slide-to="3"
                          ></li>
                        </div>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img
                              src="../images/CSE Dept Group Pic Latest.jpeg"
                              className="d-block w-100 img-fluid"
                              alt="Old Group PIc"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src=".."
                              className="d-block w-100 img-fluid"
                              alt="Old CSE Building"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="../images/applelab.jpg"
                              className="d-block w-100  img-fluid"
                              alt="Apple Laboratory"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="../images/laboratories/Projects Lab 1.JPG"
                              className="d-block w-100 img-fluid"
                              alt="Apple Laboratory"
                            />
                          </div>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselA"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselA"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 announceDiv mt-2">
                <p>Announce@CSE</p>
                <div className="announceMarquee">
                  <marquee
                    direction="up"
                    scrollamount="5"
                    onMouseEnter={(e) => e.target.stop()}
                    onMouseLeave={(e) => e.target.start()}
                  >
                    <ul>
                      <li>
                        <a href="#">MIWAI to start on 20th July, 2023</a>
                      </li>
                      <li>
                        <a href="#">MIWAI to start on 20th July, 2023</a>
                      </li>
                      <li>
                        <a href="#">MIWAI to start on 20th July, 2023</a>
                      </li>
                      <li>
                        <a href="#">MIWAI to start on 20th July, 2023</a>
                      </li>
                      <li>
                        <a href="#">MIWAI to start on 20th July, 2023</a>
                      </li>
                      <li>
                        <a href="#">MIWAI to start on 20th July, 2023</a>
                      </li>
                    </ul>
                  </marquee>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="headMessageSection">
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-12 p-5">
                <h2 className="text-center text-uppercase">
                  Message by Head of the Department
                </h2>
              </div>
            </div>

            <div className="row">
              <div
                className="col-md-6"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <img
                  src="../images/hod.jpg"
                  className="img-fluid rounded"
                  alt=""
                  style={{ border: "3px solid #203476" }}
                />
              </div>
              <div className="col-md-6">
                <div
                  className="msghoddiv"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <p className="h3">Dr. A Vani Vathsala (Professor and HOD)</p>
                  <p className="msghodp">
                    The department of Computer Science and Engineering has been
                    flourishing by leaps and bounds since its inception in 2001
                    and has seen unprecedented growth. It currently offers four
                    undergraduate programs and a postgraduate program. The
                    department is a JNTUH recognized Research Centre.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="recogSection">
          <div
            className="recogContainer"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <div className="recogItem">
              <img src="../images/UGC.png" className="img-fluid" alt="UGC" />
            </div>
            <div className="recogItem">
              <img
                src="../images/aicte.png"
                className="img-fluid"
                alt="AICTE"
              />
            </div>
            <div className="recogItem">
              <img src="../images/NBA.png" className="img-fluid" alt="NBA" />
            </div>
            <div className="recogItem">
              <img src="../images/Naac.png" className="img-fluid" alt="NAAC" />
            </div>
            <div className="recogItem">
              <img
                src="../images/JNTUH.png"
                className="img-fluid"
                alt="JNTUH"
              />
            </div>
          </div>
        </section>

        <section className="deptStrengthSection">
          <div className="deptStrengthSectionDivs">
            <div className="sHeading">
              <p>Department Strength</p>
            </div>
            <div className="deptStrengthContainer">
              <div className="deptStrengthItem">
                <span className="Prof">30</span>
                <p>Professors</p>
              </div>
              <div className="deptStrengthItem">
                <span className="AssocProf">17</span>
                <p>Associate Professors</p>
              </div>
              <div className="deptStrengthItem">
                <span className="SrAsstProf">16</span>
                <p>Sr. Assistant Professors</p>
              </div>
              <div className="deptStrengthItem">
                <span className="AsstProf">34</span>
                <p>Assistant Professors</p>
              </div>
              <div className="deptStrengthItem">
                <span className="Prog">10</span>
                <p>Programmers and Admins</p>
              </div>
              <div className="deptStrengthItem">
                <span className="Dtps">3</span>
                <p>DTP's</p>
              </div>
            </div>
          </div>
        </section>

        <section className="facStrength">
          <div className="container mt-5">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="text-center text-uppercase">
                  Deptartment Virtuoso
                </h2>
              </div>
            </div>
            <div className="container">
              <div className="facultyCardContainer">
                <div
                  className="facultyCard"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <img
                    src="../images/Faculty5.jpg"
                    alt="Faculty"
                    className="img-fluid"
                  />
                  <div className="facultyCardInfo">
                    <h3 className="facultyCardTitle">Prof. Name</h3>
                    <p className="facultyCardPosition">Professor, CSE</p>
                    <p className="facultyCardDept">
                      Department of Computer Science and Engineering
                    </p>
                  </div>
                </div>
                <div
                  className="facultyCard"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <img
                    src="../images/Faculty6.jpg"
                    alt="Faculty"
                    className="img-fluid"
                  />
                  <div className="facultyCardInfo">
                    <h3 className="facultyCardTitle">Prof. Name</h3>
                    <p className="facultyCardPosition">Professor, CSE</p>
                    <p className="facultyCardDept">
                      Department of Computer Science and Engineering
                    </p>
                  </div>
                </div>
                <div
                  className="facultyCard"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <img
                    src="../images/Faculty7.jpg"
                    alt="Faculty"
                    className="img-fluid"
                  />
                  <div className="facultyCardInfo">
                    <h3 className="facultyCardTitle">Prof. Name</h3>
                    <p className="facultyCardPosition">Professor, CSE</p>
                    <p className="facultyCardDept">
                      Department of Computer Science and Engineering
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer /> {/* Include the Footer component at the bottom of the page */}
    </>
  );
};

export default Home;
