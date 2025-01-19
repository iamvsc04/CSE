import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles.css"; // Adjust this path if necessary
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AcademicCalendar = () => {
  // Scroll to Top Function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Scroll Up (GoTo Top Button) */}
      <button onClick={scrollToTop} id="myBtn" title="Go to top">
        <i className="fa fa-angle-double-up" aria-hidden="true"></i>
      </button>

      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <main>
        <section className="academicSection">
          <div className="container mt-4">
            <h2 className="text-center">Academic Calendar</h2>
          </div>
          <div
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
                        src="images/CVR Logo.png"
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
                {/* Add more items here for other academic years */}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default AcademicCalendar;
