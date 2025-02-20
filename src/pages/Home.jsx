import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NumberLoader from "../components/NumberLoader";
import "../styles.css";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [shouldLoadNumbers, setShouldLoadNumbers] = useState(false);
  const deptStrengthRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoadNumbers(true);
          observer.disconnect(); // Stop observing after numbers load
        }
      },
      { threshold: 0.3 } // 30% of the section must be visible
    );

    if (deptStrengthRef.current) {
      observer.observe(deptStrengthRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
      <section className="carouselSection py-4">
  <div className="container-fluid">
    <div className="row align-items-center ecaDiv px-4">
      {/* Events Section */}
      <div className="col-lg-2 eventsDiv bg-light shadow-sm rounded p-3">
        <h5 className="fw-bold text-center text-primary">Events@CSE</h5>
        <div className="announceMarquee">
          <ul className="list-unstyled text-dark">
            {Array(6).fill("MIWAI to start on 20th July, 2023").map((event, index) => (
              <li key={index} className="mb-2">
                <a href="#" className="text-decoration-none text-dark">
                  {event}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Carousel Section */}
      <div className="col-lg-8">
        <div id="carouselA" className="carousel slide shadow-lg rounded overflow-hidden" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselA"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {[
              { src: "../images/CSE Dept Group Pic Latest.jpeg", alt: "Old Group Pic" },
              { src: "/images/oldcsedept.jpg", alt: "Old CSE Building" },
              { src: "/images/applelab.jpg", alt: "Apple Laboratory" },
              { src: "/images/laboratories/Projects Lab 1.JPG", alt: "Project Lab" }
            ].map((image, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img src={image.src} className="d-block w-100 img-fluid" alt={image.alt} />
                <div className="carousel-caption bg-dark bg-opacity-50 text-light rounded p-2 d-none">
                  <h5>Title for Slide {index + 1}</h5>
                  <p>Description for Slide {index + 1}.</p>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselA" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselA" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      
      {/* Announcements Section */}
      <div className="col-lg-2 announceDiv bg-light shadow-sm rounded p-3">
        <h5 className="fw-bold text-center text-danger">Announce@CSE</h5>
        <div className="announceMarquee">
          <marquee direction="up" scrollamount="3" onMouseEnter={(e) => e.target.stop()} onMouseLeave={(e) => e.target.start()}>
            <ul className="list-unstyled text-danger">
              {Array(6).fill("MIWAI to start on 20th July, 2023").map((announcement, index) => (
                <li key={index} className="mb-2">
                  <a href="#" className="text-decoration-none text-danger">
                    {announcement}
                  </a>
                </li>
              ))}
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
                  src="/images/hod.jpg"
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
              <img src="/images/UGC.png" className="img-fluid" alt="UGC" />
            </div>
            <div className="recogItem">
              <img src="/images/aicte.png" className="img-fluid" alt="AICTE" />
            </div>
            <div className="recogItem">
              <img src="/images/NBA.png" className="img-fluid" alt="NBA" />
            </div>
            <div className="recogItem">
              <img src="/images/Naac.png" className="img-fluid" alt="NAAC" />
            </div>
            <div className="recogItem">
              <img src="/images/JNTUH.png" className="img-fluid" alt="JNTUH" />
            </div>
          </div>
        </section>

        <section className="deptStrengthSection" ref={deptStrengthRef}>
          <div className="deptStrengthSectionDivs">
            <div className="sHeading">
              <p>Department Strength</p>
            </div>
            <div className="deptStrengthContainer">
              <div className="deptStrengthItem">
                <span>
                  <NumberLoader number={30} shouldLoad={shouldLoadNumbers} />
                  <p>Professors</p>
                </span>
              </div>
              <div className="deptStrengthItem">
                <span>
                  <NumberLoader number={17} shouldLoad={shouldLoadNumbers} />
                  <p>Associate Professors</p>
                </span>
              </div>
              <div className="deptStrengthItem">
                <span>
                  <NumberLoader number={16} shouldLoad={shouldLoadNumbers} />
                  <p>Sr. Assistant Professors</p>
                </span>
              </div>
              <div className="deptStrengthItem">
                <span>
                  <NumberLoader number={34} shouldLoad={shouldLoadNumbers} />
                  <p>Assistant Professors</p>
                </span>
              </div>
              <div className="deptStrengthItem">
                <span>
                  <NumberLoader number={10} shouldLoad={shouldLoadNumbers} />
                  <p>Programmers and Admins</p>
                </span>
              </div>
              <div className="deptStrengthItem">
                <span className="Dtps">
                  <NumberLoader number={3} shouldLoad={shouldLoadNumbers} />
                  <p>DTP's</p>
                </span>
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
                    src="/images/Afroz 1.jpeg"
                    width={150}
                    height={150}
                    alt="Faculty"
                    className="img"
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
                    src="/images/Afroz 2.jpeg"
                    width={150}
                    height={150}
                    alt="Faculty"
                    className="img"
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
                    src="/images/Afroz 3.jpeg"
                    width={150}
                    height={150}
                    alt="Faculty"
                    className="img"
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
      <Footer />
    </>
  );
};

export default Home;
