import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EResources.css";

const EResources = () => {
  const [activeYear, setActiveYear] = useState(null);
  const programOutcomes = [
    {
      year: "First Year I-Semester",
      subjects: [
        {
          name: "Problem Solving Through C",
          links: ["SWAYAM", "DIGITAL LIBRARY OF INDIA"],
        },
      ],
    },
    {
      year: "First Year II-Semester",
      subjects: [{ name: "Data Structures Through C", links: ["Notes"] }],
    },
    {
      year: "Second Year I-Semester",
      subjects: [
        {
          name: "Object Oriented Programming Through Java",
          links: ["JavaPoint Tutorials", "TutorialsPoint"],
        },
        {
          name: "Discrete Structures and Graph Theory",
          links: ["TutorialsPoint1", "NPTEL"],
        },
        {
          name: "Boolean Algebra and Circuit Design",
          links: ["NESO ACADEMY Video Lectures"],
        },
        { name: "Probability and Statistics", links: ["Video Tutorials"] },
        {
          name: "Unix and Shell Programming",
          links: ["Notes", "TutorialsPoint", "NPTEL", "Unix and Shell"],
        },
        { name: "Electronic Devices and Circuits", links: ["Video Lectures"] },
      ],
    },
    {
      year: "Second Year II-Semester",
      subjects: [
        {
          name: "Principles of Programming Languages",
          links: ["NOTES", "NPTEL"],
        },
        {
          name: "Data Structures Through Java",
          links: ["DSJ", "BeginnersBook", "Tutorials Point"],
        },
        {
          name: "DataBase Management Systems",
          links: ["NOTES", "NPTEL", "TutorialsPoint", "Online Notes"],
        },
        { name: "Environmental Studies", links: [] },
        {
          name: "Design And Analysis of Algorithms",
          links: [
            "NOTES",
            "NPTEL",
            "Youtube Lectures(Abul Bari)",
            "TutorialsPoint",
          ],
        },
        {
          name: "Computer Organization",
          links: ["NPTEL", "NESO ACADEMY Video Lectures"],
        },
      ],
    },
    {
      year: "Third Year I-Semester",
      subjects: [
        {
          name: "Web Technologies",
          links: ["JavaPoint Tutorials", "GeeksForGeeks", "W3Schools"],
        },
        {
          name: "Managerial Economics And Financial Analysis",
          links: ["Youtube Lectures"],
        },
        { name: "Operating Systems", links: ["NPTEL", "NPTEL 2"] },
        {
          name: "Data Communication and Computer Networks",
          links: ["NPTEL 1", "NPTEL Videos"],
        },
      ],
    },
    {
      year: "Third Year II-Semester",
      subjects: [
        { name: "Software Engineering", links: ["NPTEL", "NPTEL 2"] },
        { name: "Microprocessor and Interfacing", links: [] },
        { name: "Visual Programming using C# and .Net", links: ["Videos"] },
        {
          name: "Object Oriented Analysis And Design",
          links: ["NOTES", "Text Book"],
        },
        { name: "Introduction To Analytics", links: ["NOTES", "NPTEL"] },
        {
          name: "Web Engineering",
          links: [
            "CSS 3",
            "HTML 5",
            "Node JS",
            "Express JS",
            "Type Script",
            "Angular 2",
          ],
        },
        {
          name: "MVC Through Scripting Languages",
          links: ["Quick Guide", "Tutorials Point"],
        },
        { name: "Linux Programming", links: [] },
      ],
    },
    {
      year: "Fourth Year I-Semester",
      subjects: [
        {
          name: "Automata & Complier Design",
          links: ["Tutorials Point", "NPTEL"],
        },
        { name: "Linux Programming", links: ["NPTEL", "javatpoint"] },
        {
          name: "Data Warehousing and Data Mining",
          links: ["NOTES", "Weka Manual", "Slides"],
        },
        { name: "Big Data Analytics", links: ["NPTEL"] },
        { name: "Soft Computing", links: ["NOTES", "NPTEL"] },
        { name: "Design Patterns", links: ["NPTEL"] },
        {
          name: "Web services and Cloud Computing",
          links: ["NPTEL", "NPTEL 2"],
        },
        { name: "Internet Of Things", links: ["NOTES", "NPTEL", "NPTEL 2"] },
        {
          name: "Software Testing Methodologies",
          links: ["NOTES", "Text Book"],
        },
        { name: "Network Security", links: ["NOTES", "Text Book"] },
      ],
    },
    {
      year: "Fourth Year II-Semester",
      subjects: [
        { name: "Management Science", links: ["Text Book"] },
        { name: "Adhoc and Sensor Networks", links: ["NPTEL", "NPTEL 2"] },
        { name: "Machine Learning", links: ["NPTEL", "Videos"] },
        {
          name: "Image Processing and Pattern Recognition",
          links: ["Videos", "NPTEL"],
        },
        { name: "Predictive Analytics", links: ["NPTEL"] },
      ],
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="e-resources-wrapper">
      {/* Hero Section with Animated Background */}
      <div className="e-resources-hero text-white text-center position-relative">
        <div className="hero-overlay"></div>
        <div className="container position-relative z-3">
          <h1 className="display-4 mb-4 hero-title">E-Resources Hub</h1>
          <p className="lead hero-subtitle">
            Comprehensive Learning Resources for Every Academic Journey
          </p>
        </div>
      </div>

      {/* Navigation with Enhanced Interactivity */}
      <div className="container my-5">
        <div className="year-navigation d-flex flex-wrap justify-content-center gap-3 mb-5">
          {[...new Set(programOutcomes.map((outcome) => outcome.year))].map(
            (year, index) => (
              <button
                key={index}
                className={`btn year-btn ${
                  activeYear === year ? "btn-primary" : "btn-outline-primary"
                }`}
                onClick={() => setActiveYear(activeYear === year ? null : year)}
              >
                {year}
              </button>
            )
          )}
        </div>
      </div>

      {/* Resources Grid with Enhanced Animations */}
      <div className="container">
        {programOutcomes.map((yearData, yearIndex) => (
          <div
            key={yearIndex}
            className={`year-section mb-5 ${
              activeYear && activeYear !== yearData.year ? "d-none" : ""
            }`}
          >
            <h2 className="text-center mb-4 section-title">{yearData.year}</h2>

            <div className="row g-4">
              {yearData.subjects.map((subject, subjectIndex) => (
                <div key={subjectIndex} className="col-12 col-md-4 col-lg-3">
                  <div className="resource-card">
                    <div className="resource-card-inner">
                      <div className="resource-card-front">
                        <h3 className="resource-title">{subject.name}</h3>
                        <div className="resource-overlay">
                          <span className="explore-text">
                            Explore Resources
                          </span>
                        </div>
                      </div>

                      <div className="resource-card-back">
                        <div className="resource-links">
                          <h4 className="mb-3">Available Resources</h4>
                          {subject.links.length > 0 ? (
                            <ul className="list-unstyled">
                              {subject.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                  <a
                                    href="#"
                                    className="resource-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {link}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-muted">No resources available</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EResources;
