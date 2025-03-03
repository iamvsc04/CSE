import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import "../../styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Teaching = () => {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    loadExcelData();
  }, []);

  const loadExcelData = async () => {
    const response = await fetch("/Data/faculty.xlsx"); 
    const arrayBuffer = await response.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: "array" });
    const sheetName = workbook.SheetNames[0];
    const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
    setFaculty(jsonData);
  };

  return (
    <>
      <main>
        <section className="facStrength">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 mt-4">
                <h2 className="text-center">Teaching Faculty</h2>
              </div>
            </div>
            <div className="row" data-aos="fade-up" data-aos-duration="1000">
              {faculty.map((member, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mt-3">
                  <div className="our-team">
                    <div className="picture">
                      <img
                        className="img-fluid"
                        src={`/images/faculty/${faculty.empId}.jpg`}
                        alt={member["Name of the Staff Member"]}
                      />
                    </div>
                    <div className="team-content">
                      <h3 className="name">{member["Name of the Staff Member"]}</h3>
                      <h4 className="title">{member.Designation}</h4>
                      <h4 className="title">Joined CVR: {member.DOJ}</h4>
                    </div>
                    <ul className="social">
                      <li>
                        <a href="#" aria-hidden="true">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" aria-hidden="true">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" aria-hidden="true">
                          <i className="fa-brands fa-google-plus-g"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" aria-hidden="true">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Teaching;
