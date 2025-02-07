import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Workshops = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [years, setYears] = useState([]);
    const [selectedYear, setSelectedYear] = useState("");

    useEffect(() => {
        // Load the Excel file from public folder
        fetch("/Data/workshops/2023-2024.xlsx") 
            .then(response => response.arrayBuffer())
            .then(buffer => {
                const workbook = XLSX.read(buffer, { type: "array" });
                const sheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = XLSX.utils.sheet_to_json(sheet);

                setData(jsonData);

                // Extract unique academic years
                const uniqueYears = [...new Set(jsonData.map(item => item["Year"]))];
                setYears(uniqueYears);
            });
    }, []);

    useEffect(() => {
        if (selectedYear) {
            setFilteredData(data.filter(item => item["Year"] === selectedYear));
        } else {
            setFilteredData(data);
        }
    }, [selectedYear, data]);

    return (
        <div>
            <Header />
            <h2>Workshop List</h2>

            {/* Dropdown to filter by academic year */}
            <label>Select Academic Year: </label>
            <select onChange={(e) => setSelectedYear(e.target.value)}>
                <option value="">All</option>
                {years.map((year, index) => (
                    <option key={index} value={year}>{year}</option>
                ))}
            </select>

            {/* Workshop Data Table */}
            <table border="1">
                <thead>
                    <tr>
                        <th>S. No</th>
                        <th>Year</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Title</th>
                        <th>From</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((workshop, index) => (
                        <tr key={index}>
                            <td>{workshop["S. No"]}</td>
                            <td>{workshop["Year"]}</td>
                            <td>{workshop["Name of"]}</td>
                            <td>{workshop["Date"]}</td>
                            <td>{workshop["Title"]}</td>
                            <td>{workshop["From"]}</td>
                            <td>{workshop["Count"]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Footer />
        </div>
    );
};

export default Workshops;
