import React, { useEffect } from "react";
import "../../styles.css";
const AcademicCalendar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const academicPrograms = [
    { title: "B.Tech CSE", year: "I Year - 2023-24" },
    { title: "B.Tech IT", year: "I Year - 2023-24" },
    { title: "B.Tech ECE", year: "I Year - 2023-24" },
    { title: "B.Tech EEE", year: "I Year - 2023-24" },
    { title: "M.Tech CSE", year: "I Year - 2023-24" },
    { title: "M.Tech VLSI", year: "I Year - 2023-24" },
    { title: "M.Tech Power Systems", year: "I Year - 2023-24" },
    { title: "M.Tech Machine Learning", year: "I Year - 2023-24" },
  ];

  return (
    <div className="bg-light">
      <main>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="display-4 text-center mb-5 text-primary">
                  Academic Calendar
                </h1>
              </div>
            </div>

            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
              {academicPrograms.map((program, index) => (
                <div key={index} className="col">
                  <div className="card h-100 shadow-sm border-0 text-center ">
                    <div className="card-body d-flex flex-column">
                      <div className="mb-4">
                        <img
                          src="/images/CVR Logo.png"
                          alt="CVR Logo"
                          className="img-fluid mb-3"
                          style={{ maxHeight: "100px", maxWidth: "150px" }}
                        />
                        <h5 className="card-title text-dark mb-2">
                          {program.title}
                        </h5>
                      </div>
                      <a
                        href="#"
                        className="btn btn-primary mt-auto stretched-link"
                      >
                        {program.year}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AcademicCalendar;
