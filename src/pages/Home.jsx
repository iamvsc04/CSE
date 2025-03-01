import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as XLSX from "xlsx";
import NumberLoader from "../components/NumberLoader";
import "../styles.css";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [shouldLoadNumbers, setShouldLoadNumbers] = useState(false);
  const [facultyData, setFacultyData] = useState([]);

  const deptStrengthRef = useRef(null);
  useEffect(() => {
    const fetchExcelData = async () => {
      try {
        const response = await fetch("/Data/faculty.xlsx");
        
        if (!response.ok) {
          throw new Error(`Failed to load faculty.xlsx: HTTP ${response.status}`);
        }
    
        const data = await response.arrayBuffer();
        const workbook = XLSX.read(data, { type: "array", cellDates: true });
    
        if (!workbook.SheetNames.length) throw new Error("No sheets found in Excel file.");
    
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
    
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        if (!jsonData.length) throw new Error("Excel sheet is empty.");
    
        const formattedData = jsonData.slice(1, 16).map((row) => ({
          empId: row[1] || "N/A",
          name: row[2] || "Unknown",
          designation: row[3] || "Unknown",
          email: row[4] || "N/A",
          doj: row[5] instanceof Date ? row[5].toLocaleDateString("en-GB") : row[5] || "N/A",
        }));
    
        console.log("Excel Data Loaded:", formattedData);
        setFacultyData(formattedData);
      } catch (error) {
        console.error("Error loading Excel file:", error.message);
      }
    };
    

    fetchExcelData();
  }, []);

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

  const images = [
    {
      src: "/images/newgrouppic.jpg",
      alt: "Old Group Pic",
      title: "Department Strength",
      caption: "This is the Strength of the Department",
    },
    {
      src: "/images/oldcsedept.jpg",
      alt: "Old CSE Building",
      title: "Old CSE Building",
      caption: "CSE Block with well-furnished Laboratories and Classrooms",
    },
    {
      src: "/images/applelab.jpg",
      alt: "Apple Laboratory",
      title: "Apple Laboratory",
      caption:
        "Apple Laboratory where research and project development happens.",
    },
    {
      src: "/images/laboratories/Projects Lab 1.JPG",
      alt: "Project Lab",
      title: "Projects Lab",
      caption:
        "Projects Laboratory where students do their Mini & Major Projects.",
    },
  ];

  


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
              style={{ height: "85vh", width: "100vw", margin: "-12px" }}
            >
              <div
                id="carouselA"
                className="carousel slide shadow-lg rounded"
                data-bs-ride="carousel"
                style={{ height: "85vh", width: "100vw" }}
              >
                {/* Carousel Indicators */}
                <div className="carousel-indicators">
                  {images.map((_, index) => (
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

                {/* Carousel Images */}
                <div
                  className="carousel-inner"
                  style={{
                    height: "85vh",
                    width: "100vw",
                  }}
                >
                  {images.map((image, index) => (
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
                      <div className="carousel-caption">
                        <h5>{image.title}</h5>
                        <p>{image.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Carousel Controls */}
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

            <div id="facultyCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
              <div className="carousel-inner">
                {facultyData
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
                              <div className="facultyCard" data-aos="fade-up" data-aos-duration="1500">
                                <img
                                  src={`/images/faculty/${faculty.empId}.jpg`} // Assuming image filenames match EMP ID
                                  width={120}
                                  height={120}
                                  alt={faculty.name}
                                  className="img"
                                />
                                <div className="facultyCardInfo">
                                  <h3 className="facultyCardTitle">{faculty.name}</h3>
                                  <p className="facultyCardPosition">{faculty.designation}</p>
                                  <p className="facultyCardDoj">DOJ: {faculty.doj}</p>
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
              <button className="carousel-control-prev" type="button" data-bs-target="#facultyCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#facultyCarousel" data-bs-slide="next">
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
