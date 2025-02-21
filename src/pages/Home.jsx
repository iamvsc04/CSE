import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NumberLoader from "../components/NumberLoader";
import "../styles.css";
import FacultyCard from "../components/FacultyCard";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [shouldLoadNumbers, setShouldLoadNumbers] = useState(false);
  const deptStrengthRef = useRef(null);

  let fc1 = {
    name: "VSC",
    dept: "cse",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoadNumbers(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
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
        <div className="container-fluid p-0 ">
          <section
            className="carouselSection"
            style={{ height: "85vh", width: "100vw" }}
          >
            <div
              className="container-fluid"
              style={{
                height: "85vh",
                width: "100vw",
                margin: "-12px",
              }}
            >
              <div
                id="carouselA"
                className="carousel slide shadow-lg rounded"
                data-bs-ride="carousel"
                style={{ height: "85vh", width: "100vw" }}
              >
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
                <div
                  className="carousel-inner"
                  style={{ height: "85vh", width: "100vw" }}
                >
                  {[
                    {
                      src: "../images/CSE Dept Group Pic Latest.jpeg",
                      alt: "Old Group Pic",
                      title:"Department Strength",
                      caption:"This is the Strength of the Department"
                    },
                    {
                      src: "/images/oldcsedept.jpg",
                      alt: "Old CSE Building",
                      title:"Old CSE Building",
                      caption:"CSE Block with well furnished Laboratories and Classroom"
                    },
                    { src: "/images/applelab.jpg",
                      alt: "Apple Laboratory",
                      title:"Apple Laboratory",
                      caption:"Apple Laboratory where research and project develpment happens. Students can explore iOS Development here."
                     },
                    {
                      src: "/images/laboratories/Projects Lab 1.JPG",
                      alt: "Project Lab",
                      title:"projects lab",
                      caption:"Projects Laboratory where students will do their Mini and Major Projects Demonstrations."
                    },
                  ].map((image, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                      style={{ height: "85vh", width: "100vw" }}
                    >
                      <img
                        src={image.src}
                        className="d-block w-100"
                        alt={image.alt}
                        style={{
                          height: "85vh",
                          width: "100vw",
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                      <div className="carousel-caption bg-dark bg-opacity-50 text-light rounded p-2 d-none">
                        <h5>{image.title}</h5>
                        <p>{image.caption} </p>
                      </div>
                    </div>
                  ))}
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
          </section>
        </div>
        <section className="headMessageSection">
          <div className="container mt-3">
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
              <div className="col-md-6 hodmsg">
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
        <h2 className="text-center text-uppercase">Department Virtuoso</h2>
      </div>
    </div>

    <div
      id="facultyCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-inner">
        {[
          { img: "/images/Afroz 1.jpeg" },
          { img: "/images/Afroz 2.jpeg" },
          { img: "/images/Afroz 3.jpeg" },
          { img: "/images/Afroz 1.jpeg" },
          { img: "/images/Afroz 2.jpeg" },
          { img: "/images/Afroz 3.jpeg" },
          { img: "/images/Afroz 1.jpeg" },
          { img: "/images/Afroz 2.jpeg" },
          { img: "/images/Afroz 3.jpeg" },
          { img: "/images/Afroz 1.jpeg" },
          { img: "/images/Afroz 2.jpeg" },
          { img: "/images/Afroz 3.jpeg" },
          { img: "/images/Afroz 3.jpeg" },
        ]
          .reduce((acc, item, index) => {
            if (index % 3 === 0) acc.push([]);
            acc[acc.length - 1].push(item);
            return acc;
          }, [])
          .map((group, i) => (
            <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}>
              <div className="container">
                <div className="row">
                  {group.map((faculty, j) => (
                    <div className="col-md-4" key={j}>
                      <div
                        className="facultyCard"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                      >
                        <img
                          src={faculty.img}
                          width={120}
                          height={120}
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
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#facultyCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#facultyCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  </div>
</section>


      </main>
      <Footer />
    </>
  );
};

export default Home;
