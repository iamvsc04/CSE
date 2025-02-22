import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AcademicCalender = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <button
        onClick={() => window.scrollTo(0, 0)}
        id="myBtn"
        title="Go to top"
      >
        <i className="fa fa-angle-double-up" aria-hidden="true"></i>
      </button>

      <Header />

      <main>
        <section className="academicSection">
          <section className="academicContainer mt-4">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <h2 className="text-center">Academic Calendar</h2>
                </div>
              </div>
            </div>

            <section
              className="calenderItems mt-3"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="container">
                <div className="itemsContainer p-3">
                  <div className="item">
                    <div className="icon text-center">
                      <h3>
                        <img
                          src="/images/CVR Logo.png"
                          className="img-fluid"
                          alt="CVR Logo"
                        />{" "}
                        B.Tech CSE
                      </h3>
                    </div>
                    <h4>
                      <a className="btn form-control" href="#">
                        I Year - 2023-24
                      </a>
                    </h4>
                  </div>

                  <div className="item">
                    <div className="icon text-center">
                      <h3>
                        <img
                          src="/images/CVR Logo.png"
                          className="img-fluid"
                          alt="CVR Logo"
                        />{" "}
                        B.Tech IT
                      </h3>
                    </div>
                    <h4>
                      <a className="btn form-control" href="#">
                        I Year - 2023-24
                      </a>
                    </h4>
                  </div>

                  <div className="item">
                    <div className="icon text-center">
                      <h3>
                        <img
                          src="/images/CVR Logo.png"
                          className="img-fluid"
                          alt="CVR Logo"
                        />{" "}
                        B.Tech ECE
                      </h3>
                    </div>
                    <h4>
                      <a className="btn form-control" href="#">
                        I Year - 2023-24
                      </a>
                    </h4>
                  </div>

                  <div className="item">
                    <div className="icon text-center">
                      <h3>
                        <img
                          src="/images/CVR Logo.png"
                          className="img-fluid"
                          alt="CVR Logo"
                        />{" "}
                        B.Tech EEE
                      </h3>
                    </div>
                    <h4>
                      <a className="btn form-control" href="#">
                        I Year - 2023-24
                      </a>
                    </h4>
                  </div>

                  <div className="item">
                    <div className="icon text-center">
                      <h3>
                        <img
                          src="/images/CVR Logo.png"
                          className="img-fluid"
                          alt="CVR Logo"
                        />{" "}
                        M.Tech CSE
                      </h3>
                    </div>
                    <h4>
                      <a className="btn form-control" href="#">
                        I Year - 2023-24
                      </a>
                    </h4>
                  </div>

                  <div className="item">
                    <div className="icon text-center">
                      <h3>
                        <img
                          src="/images/CVR Logo.png"
                          className="img-fluid"
                          alt="CVR Logo"
                        />{" "}
                        M.Tech VLSI
                      </h3>
                    </div>
                    <h4>
                      <a className="btn form-control" href="#">
                        I Year - 2023-24
                      </a>
                    </h4>
                  </div>

                  <div className="item">
                    <div className="icon text-center">
                      <h3>
                        <img
                          src="/images/CVR Logo.png"
                          className="img-fluid"
                          alt="CVR Logo"
                        />{" "}
                        M.Tech Power Systems
                      </h3>
                    </div>
                    <h4>
                      <a className="btn form-control" href="#">
                        I Year - 2023-24
                      </a>
                    </h4>
                  </div>

                  <div className="item">
                    <div className="icon text-center">
                      <h3>
                        <img
                          src="/images/CVR Logo.png"
                          className="img-fluid"
                          alt="CVR Logo"
                        />{" "}
                        M.Tech Machine Learning
                      </h3>
                    </div>
                    <h4>
                      <a className="btn form-control" href="#">
                        I Year - 2023-24
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AcademicCalender;
