import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ConsultancyProjects = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedYear, setSelectedYear] = useState("2023-2024"); // Default to 2023-2024

    // Function to format dates correctly into "DD/MM/YYYY"
    const formatDate = (dateValue) => {
        if (!dateValue) return ""; // Handle empty values

        // Check if the value is an Excel serial number
        if (!isNaN(dateValue) && dateValue > 40000) {
            const date = new Date((dateValue - 25569) * 86400000); // Convert Excel serial to JS date
            return date.toLocaleDateString("en-GB"); // "DD/MM/YYYY"
        }

        // Check if the value is a recognizable date string
        const parsedDate = new Date(dateValue);
        if (!isNaN(parsedDate.getTime())) {
            return parsedDate.toLocaleDateString("en-GB"); // "DD/MM/YYYY"
        }

        // Handle cases like "29.09.23" or "10/6/23"
        const dateParts = dateValue.match(/(\d{1,2})[./-](\d{1,2})[./-](\d{2,4})/);
        if (dateParts) {
            let [_, day, month, year] = dateParts;
            if (year.length === 2) year = "20" + year; // Convert "23" → "2023"
            return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`;
        }

        return dateValue; // Return as-is if it doesn't match known formats
    };

    // Function to load data based on selected year
    const fetchExcelData = async (year) => {
        try {
            const response = await fetch(`/Data/Patents/${year}.xlsx`);
            const arrayBuffer = await response.arrayBuffer();
            const workbook = XLSX.read(arrayBuffer, { type: "array" });
            const sheet = workbook.Sheets[workbook.SheetNames[0]];

            // Convert sheet to JSON with raw data handling disabled
            const jsonData = XLSX.utils.sheet_to_json(sheet, { raw: false });

            // Format date fields consistently
            const formattedData = jsonData.map((row) => ({
                ...row,
                "Patent filed Date (DD/MM/YYYY)": formatDate(row["Patent filed Date (DD/MM/YYYY)"]),
                "Patent published/granted data (DD/MM/YYYY)": formatDate(row["Patent published/granted data (DD/MM/YYYY)"]),
            }));

            setData(formattedData);
            setFilteredData(formattedData); // Load full dataset initially
        } catch (error) {
            console.error("Error loading Excel file:", error);
        }
    };

    // Load data when component mounts or when the year changes
    useEffect(() => {
        fetchExcelData(selectedYear);
    }, [selectedYear]);

    return (
        <div>
            <Header />
            <h2>Patent List</h2>

            {/* Dropdown to select which academic year's dataset to load */}
            <label>Select Academic Year: </label>
            <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                <option value="2023-2024">2023-2024</option>
                <option value="2022-2023">2022-2023</option>
                <option value="2021-2022">2021-2022</option>
            </select>

            {/* Patent Data Table */}
            <table border="1">
                <thead>
                    <tr>
                        <th>S. No</th>
                        <th>Patent Application No.</th>
                        <th>Status of Patent (Published/Granted)</th>
                        <th>Inventor(s) Name</th>
                        <th>Title of the Patent</th>
                        <th>Applicants Name</th>
                        <th>Patent Filed Date (DD/MM/YYYY)</th>
                        <th>Patent Published/Granted Date (DD/MM/YYYY)</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((patent, index) => (
                        <tr key={index}>
                            <td>{patent["S. No"]}</td>
                            <td>{patent["Patent Application No."]}</td>
                            <td>{patent["Status of Patent (Published/Granted)"]}</td>
                            <td>{patent["Inventor(s) Name"]}</td>
                            <td>{patent["Title of the patent"]}</td>
                            <td>{patent["Applicants Name"]}</td>
                            <td>{patent["Patent filed Date (DD/MM/YYYY)"]}</td>
                            <td>{patent["Patent published/granted data (DD/MM/YYYY)"]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Footer />
        </div>
    );
};

export default ConsultancyProjects;
