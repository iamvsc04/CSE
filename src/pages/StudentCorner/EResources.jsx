import React, { useEffect } from "react";

import "../../styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const EResources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

  return (
    <>
      <main>
        <section className="eResourcesSection">
          <div className="container mt-5">
            <h2 className="text-center mb-5">E-Resources</h2>

            {programOutcomes.map((yearData, yearIndex) => (
              <section key={yearIndex} className="mb-5">
                {/* 🔹 Heading Above */}
                <h3 className="mb-4 text-center">{yearData.year}</h3>

                {/* 🔹 Cards Below (3 per row) */}
                <div
                  className="card-section row"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  {yearData.subjects.map((subject, subjectIndex) => (
                    <div
                      className="col-md-4 d-flex justify-content-center mb-4"
                      key={subjectIndex}
                    >
                      <div className="card">
                        <div className="flip-card">
                          <div className="flip-card__container">
                            {/* 🔹 Front Page (Displays Subject Name) */}
                            <div className="card-front">
                              <div className="card-front__tp1 card-front__tp--city1">
                                <h3 className="card-front__heading1">
                                  {subject.name}
                                </h3>
                              </div>
                              <div className="card-front__bt">
                                <p className="card-front__text-view2">
                                  View me
                                </p>
                              </div>
                            </div>

                            {/* 🔹 Back Page (Displays Subject Name Again) */}
                            <div className="card-back">
                              <h4 className="card-back__heading1 inside-page__heading--city1">
                                {subject.name}
                              </h4>
                            </div>
                          </div>
                        </div>

                        {/* 🔹 Next Page (Links Appears Here) */}
                        <div className="inside-page">
                          <div className="inside-page__container">
                            <ul>
                              {subject.links.map((link, index) => (
                                <li key={index}>
                                  <a href="#">{link}</a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default EResources;
