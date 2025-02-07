import React, { useEffect } from "react";
import {
  BookOpen,
  Building2,
  GraduationCap,
  Users,
  Target,
  Phone,
} from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="min-vh-100 bg-light">
        {/* Hero Section */}
        <div className="hero-section py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 text-center">
                <h1 className="display-4 fw-bold">About the CSE Department</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container py-5">
          {/* Story and Why Choose Us */}
          <div className="row g-4 mb-5">
            <div className="col-md-6">
              <div className="card h-100 shadow">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4">
                    <div className="icon-wrapper me-3">
                      <BookOpen size={32} />
                    </div>
                    <h2 className="h3 mb-0">Our Story</h2>
                  </div>
                  <p className="text-muted">
                    The Computer Science and Engineering Department at
                    <span className="fw-semibold text-primary">
                      {" "}
                      CVR College of Engineering
                    </span>
                    is dedicated to academic excellence and innovation. Our
                    mission is to equip students with cutting-edge knowledge and
                    industry-relevant skills.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 shadow">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4">
                    <div className="icon-wrapper me-3">
                      <Target size={32} />
                    </div>
                    <h2 className="h3 mb-0">Why Choose Us?</h2>
                  </div>
                  <ul className="list-unstyled text-muted">
                    {[
                      "Highly qualified faculty with diverse expertise",
                      "State-of-the-art laboratories",
                      "Strong industry collaborations",
                      "Excellent placement records",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="mb-2 d-flex align-items-center"
                      >
                        <span className="bullet-point"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="card shadow mb-5">
            <div className="card-body">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="d-flex align-items-center mb-4">
                    <div className="icon-wrapper me-3">
                      <GraduationCap size={32} />
                    </div>
                    <h2 className="h3 mb-0">Our Vision</h2>
                  </div>
                  <p className="text-muted">
                    To be a center of excellence in Computer Science and
                    Engineering education, fostering innovation, research, and
                    leadership to address global challenges.
                  </p>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center mb-4">
                    <div className="icon-wrapper me-3">
                      <Target size={32} />
                    </div>
                    <h2 className="h3 mb-0">Our Mission</h2>
                  </div>
                  <ul className="list-unstyled text-muted">
                    {[
                      "Provide high-quality technical education",
                      "Promote research and innovation",
                      "Encourage industry-academia collaboration",
                    ].map((item, index) => (
                      <li key={index} className="mb-2 d-flex align-items-start">
                        <span className="bullet-point mt-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Placements & Contact */}
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 shadow">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4">
                    <div className="icon-wrapper me-3">
                      <Building2 size={32} />
                    </div>
                    <h2 className="h3 mb-0">Placements</h2>
                  </div>
                  <p className="text-muted mb-4">
                    Our students are placed in top companies like Google,
                    Microsoft, Amazon, and Infosys, with competitive salary
                    packages.
                  </p>
                  <div>
                    {["Google", "Microsoft", "Amazon", "Infosys"].map(
                      (company) => (
                        <span key={company} className="company-badge me-2 mb-2">
                          {company}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 shadow">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4">
                    <div className="icon-wrapper me-3">
                      <Phone size={32} />
                    </div>
                    <h2 className="h3 mb-0">Contact Us</h2>
                  </div>
                  <div className="text-muted">
                    <p className="d-flex align-items-center mb-3">
                      <span className="me-2">📍</span>
                      CVR College of Engineering, Hyderabad
                    </p>
                    <p className="d-flex align-items-center mb-3">
                      <span className="me-2">📧</span>
                      cse@cvr.ac.in
                    </p>
                    <p className="d-flex align-items-center mb-0">
                      <span className="me-2">📞</span>
                      +91-XXXXXXXXXX
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
