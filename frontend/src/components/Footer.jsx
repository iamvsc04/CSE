import React,{useState,useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Major Links</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="contacts.html">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Academics</h4>
            <ul>
              <li><a href="visionmission.html">Vision Mission</a></li>
              <li><a href="objectives.html">Objectives</a></li>
              <li><a href="academiccalendar.html">Academic Calendars</a></li>
              <li><a href="syllabus.html">Syllabus</a></li>
              <li><a href="timetables.html">Time Tables</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Infrastructure</h4>
            <ul>
              <li><a href="labs.html">Laboratories</a></li>
              <li><a href="classes.html">Class Rooms</a></li>
              <li><a href="seminarhall.html">Seminar Hall</a></li>
              <li><a href="library.html">Library</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Faculty</h4>
            <ul>
              <li><a href="teaching.html">Teaching</a></li>
              <li><a href="nonteaching.html">Non - Teaching</a></li>
              <li><a href="techstaff.html">Technical Staff</a></li>
              <li><a href="adminstaff.html">Admin</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Research</h4>
            <ul>
              <li><a href="conferences.html">Conferences</a></li>
              <li><a href="workshops.html">Workshops</a></li>
              <li><a href="researchprojs.html">Research Projects</a></li>
              <li><a href="consultancyprojs.html">Consultancy Projects</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Student Corner</h4>
            <ul>
              <li><a href="eresources.html">E-Resources</a></li>
              <li><a href="studentwork.html">Student Work</a></li>
              <li><a href="gallary.html">Gallery</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <li>
                <h2><a href="#" className="mt-5">Copyright © 2023 CVRCE CSEDEPT</a></h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
