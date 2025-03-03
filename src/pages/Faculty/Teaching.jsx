import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import "../../styles.css";

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
    <main>
      <section className="facStrength">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 mt-4">
              <h2 className="text-center faculty-heading">Teaching Faculty</h2>
            </div>
          </div>
          <div className="row" data-aos="fade-up" data-aos-duration="1000">
            {faculty.map((member, index) => (
              <div
                key={index}
                className="col-12 col-sm-6 col-md-4 col-lg-3 mt-4"
              >
                <div className="faculty-card">
                  <div className="faculty-img">
                    <img
                      src={`/faculty/${member.empId}.jpg`}
                      alt={member["Name of the Staff Member "]}
                    />
                  </div>
                  <div className="faculty-info">
                    <h4 className="faculty-name">
                      {member["Name of the Staff Member "]}
                    </h4>
                    <p className="faculty-designation">{member.Designation}</p>
                    <p className="faculty-join">Joined CVR: {member.DOJ}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Teaching;
