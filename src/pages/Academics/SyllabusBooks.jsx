import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const SyllabusBooks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const syllabusCategories = [
    {
      title: "B.Tech Programs",
      programs: [
        {
          name: "CSE",
          years: [
            "I Year - 2023-24",
            "II Year - 2023-24",
            "III Year - 2023-24",
            "IV Year - 2023-24",
          ],
        },
        { name: "IT", years: ["I Year - 2023-24", "II Year - 2023-24"] },
        { name: "ECE", years: ["I Year - 2023-24", "II Year - 2023-24"] },
        { name: "EEE", years: ["I Year - 2023-24", "II Year - 2023-24"] },
      ],
    },
    {
      title: "M.Tech Programs",
      programs: [
        { name: "AI", years: ["I Year - 2023-24", "II Year - 2023-24"] },
        { name: "CSE", years: ["I Year - 2023-24"] },
        { name: "VLSI", years: ["I Year - 2023-24"] },
        { name: "Power Systems", years: ["I Year - 2023-24"] },
      ],
    },
  ];

  return (
    <div className="bg-light min-vh-100">
      <main className="container py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="display-4 text-center text-primary mb-5">
              Syllabus & Study Materials
            </h1>
          </div>
        </div>

        {syllabusCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-5">
            <div className="row mb-4">
              <div className="col-12">
                <h2 className="text-center text-secondary">{category.title}</h2>
              </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              {category.programs.map((program, programIndex) => (
                <div key={programIndex} className="col">
                  <div className="card h-100 shadow-sm border-0 transform-on-hover">
                    <div className="card-body text-center">
                      <div className="mb-3">
                        <img
                          src="/images/CVR Logo.png"
                          alt="CVR Logo"
                          className="img-fluid mb-3"
                          style={{ maxHeight: "100px", maxWidth: "150px" }}
                        />
                        <h5 className="card-title text-dark mb-2">
                          {program.name}
                        </h5>
                      </div>

                      <div className="d-grid gap-2">
                        {program.years.map((year, yearIndex) => (
                          <a
                            key={yearIndex}
                            href="#"
                            className="btn btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target={`#modal-${categoryIndex}-${programIndex}-${yearIndex}`}
                          >
                            {year}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Modal for Syllabus Details */}
                  {program.years.map((year, yearIndex) => (
                    <div
                      key={yearIndex}
                      className="modal fade"
                      id={`modal-${categoryIndex}-${programIndex}-${yearIndex}`}
                      tabIndex="-1"
                    >
                      <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">
                              {program.name} - {year} Syllabus
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <div className="alert alert-info" role="alert">
                              Syllabus and study materials will be uploaded
                              soon.
                            </div>
                            <p className="text-muted text-center">
                              For the most up-to-date information, please
                              contact the academic office.
                            </p>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default SyllabusBooks;
