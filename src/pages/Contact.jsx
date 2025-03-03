import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const pulseAnimation = {
  initial: { scale: 1 },
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    department: "general",
  });

  const [formStatus, setFormStatus] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Load required external resources
    if (!document.getElementById("bootstrap-icons")) {
      const link = document.createElement("link");
      link.id = "bootstrap-icons";
      link.rel = "stylesheet";
      link.href =
        "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css";
      document.head.appendChild(link);
    }

    // Simulate map loading
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear validation error when user types
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message is required";

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Simulate form submission
    setFormStatus("submitting");

    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        department: "general",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1500);
  };

  // Contact information
  const contactInfo = [
    {
      icon: "bi-geo-alt",
      title: "Our Location",
      content:
        "123 University Campus, Academic Avenue, Hyderabad - 500032, India",
      color: "#4361ee",
    },
    {
      icon: "bi-telephone",
      title: "Call Us",
      content: "+91 40 2301 4567",
      color: "#3a0ca3",
    },
    {
      icon: "bi-envelope",
      title: "Email Us",
      content: "cse-department@college.edu",
      color: "#7209b7",
    },
    {
      icon: "bi-clock",
      title: "Office Hours",
      content: "Monday - Friday: 9AM to 5PM",
      color: "#f72585",
    },
  ];

  // Department contacts
  const departmentContacts = [
    { id: "general", name: "General Inquiries" },
    { id: "admissions", name: "Admissions" },
    { id: "research", name: "Research Collaboration" },
    { id: "placements", name: "Placements & Internships" },
    { id: "alumni", name: "Alumni Relations" },
  ];

  // FAQ content
  const faqs = [
    {
      question: "How can I apply for CSE courses?",
      answer:
        "Applications for our Computer Science and Engineering courses can be submitted through the college admission portal. Visit the Admissions section of our website for detailed information about entry requirements, application deadlines, and the selection process.",
    },
    {
      question: "What research opportunities are available for students?",
      answer:
        "We offer numerous research opportunities through our specialized labs in AI, Machine Learning, Cybersecurity, and Data Science. Undergraduate students can participate in research projects under faculty mentorship, while postgraduate students can pursue focused research initiatives aligned with departmental priorities.",
    },
    {
      question: "How can industry partners collaborate with the department?",
      answer:
        "Industry partners can collaborate through sponsored research, consultancy projects, student internships, guest lectures, and our Industry Advisory Board. Contact our Industry Relations Coordinator via the Research Collaboration option in the form for partnership opportunities.",
    },
  ];

  return (
    <div className="contact-page">
      {/* Hero Section with Animated Particles */}
      <section className="contact-hero-section position-relative overflow-hidden d-flex align-items-center">
        <div className="particles-container">
          <div className="particle p1"></div>
          <div className="particle p2"></div>
          <div className="particle p3"></div>
          <div className="particle p4"></div>
          <div className="particle p5"></div>
          <div className="particle p6"></div>
        </div>

        <div className="container position-relative">
          <motion.div
            className="row justify-content-center text-center"
            initial="hidden"
            animate="visible"
            variants={slideUp}
          >
            <div className="col-lg-10">
              <h1 className="display-3 fw-bold text-white mb-3">
                Get In Touch
              </h1>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="subtitle-container mb-4"
              >
                <p
                  className="lead text-white mx-auto"
                  style={{ maxWidth: "700px" }}
                >
                  Have questions about our programs, research, or admissions?
                  We're here to help you connect with the CSE department.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="hero-cta"
              >
                <a
                  href="#contact-form"
                  className="btn btn-light btn-lg px-4 py-2 rounded-pill shadow-sm me-3"
                >
                  Contact Us <i className="bi bi-arrow-right ms-2"></i>
                </a>
                <a
                  href="#faq-section"
                  className="btn btn-outline-light btn-lg px-4 py-2 rounded-pill"
                >
                  FAQs <i className="bi bi-question-circle ms-2"></i>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <svg
          className="contact-wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,186.7C672,213,768,235,864,224C960,213,1056,171,1152,160C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></motion.path>
        </svg>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section py-5">
        <div className="container">
          <motion.div
            className="row g-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {contactInfo.map((info, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <motion.div
                  variants={fadeIn}
                  className="contact-card h-100 p-4 rounded-lg shadow-hover text-center"
                >
                  <div
                    className="contact-icon-wrapper mx-auto mb-3"
                    style={{ backgroundColor: `${info.color}15` }}
                  >
                    <i
                      className={`bi ${info.icon}`}
                      style={{ color: info.color }}
                    ></i>
                  </div>
                  <h3 className="h5 mb-3">{info.title}</h3>
                  <p className="mb-0 text-muted">{info.content}</p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="main-contact-section py-5" id="contact-form">
        <div className="container">
          <motion.div
            className="row align-items-stretch g-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            {/* Contact Form */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="contact-form-container h-100 bg-white p-4 p-lg-5 rounded-lg shadow-sm">
                <motion.div variants={slideUp}>
                  <h2 className="h3 text-gradient mb-4">Send Us a Message</h2>

                  {formStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="alert alert-success"
                    >
                      <i className="bi bi-check-circle me-2"></i>
                      Your message has been sent successfully! We'll get back to
                      you soon.
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className={`form-control ${
                              validationErrors.name ? "is-invalid" : ""
                            }`}
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                          <label htmlFor="name">Your Name</label>
                          {validationErrors.name && (
                            <div className="invalid-feedback">
                              {validationErrors.name}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            className={`form-control ${
                              validationErrors.email ? "is-invalid" : ""
                            }`}
                            id="email"
                            name="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          <label htmlFor="email">Email Address</label>
                          {validationErrors.email && (
                            <div className="invalid-feedback">
                              {validationErrors.email}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <select
                            className="form-select"
                            id="department"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                          >
                            {departmentContacts.map((dept) => (
                              <option key={dept.id} value={dept.id}>
                                {dept.name}
                              </option>
                            ))}
                          </select>
                          <label htmlFor="department">Department</label>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className={`form-control ${
                              validationErrors.subject ? "is-invalid" : ""
                            }`}
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                          />
                          <label htmlFor="subject">Subject</label>
                          {validationErrors.subject && (
                            <div className="invalid-feedback">
                              {validationErrors.subject}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <textarea
                            className={`form-control ${
                              validationErrors.message ? "is-invalid" : ""
                            }`}
                            id="message"
                            name="message"
                            placeholder="Your message"
                            style={{ height: "150px" }}
                            value={formData.message}
                            onChange={handleChange}
                          ></textarea>
                          <label htmlFor="message">Your Message</label>
                          {validationErrors.message && (
                            <div className="invalid-feedback">
                              {validationErrors.message}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-12">
                        <motion.button
                          type="submit"
                          className="btn btn-primary btn-lg rounded-pill px-4 py-2"
                          disabled={formStatus === "submitting"}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {formStatus === "submitting" ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm me-2"
                                role="status"
                                aria-hidden="true"
                              ></span>
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message <i className="bi bi-send ms-2"></i>
                            </>
                          )}
                        </motion.button>
                      </div>
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>

            {/* Map */}
            <div className="col-lg-6">
              <div className="map-container h-100 rounded-lg overflow-hidden shadow-sm">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: mapLoaded ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="h-100"
                >
                  {!mapLoaded && (
                    <div className="map-loading d-flex justify-content-center align-items-center h-100">
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      >
                        <span className="visually-hidden">Loading map...</span>
                      </div>
                    </div>
                  )}

                  <div
                    className={`map-placeholder h-100 ${
                      mapLoaded ? "d-block" : "d-none"
                    }`}
                  >
                    <div className="map-overlay d-flex flex-column justify-content-center align-items-center text-white">
                      <motion.div
                        initial="initial"
                        animate="pulse"
                        variants={pulseAnimation}
                        className="map-pin mb-3"
                      >
                        <i className="bi bi-geo-alt"></i>
                      </motion.div>
                      <h3 className="h4 mb-2">CSE Department</h3>
                      <p className="mb-4 text-center px-4">
                        Visit us at our campus in Hyderabad
                      </p>
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-light btn-sm rounded-pill px-3"
                      >
                        Get Directions{" "}
                        <i className="bi bi-box-arrow-up-right ms-1"></i>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-5 my-5" id="faq-section">
        <div className="container">
          <motion.div
            className="row justify-content-center mb-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideUp}
          >
            <div className="col-lg-8 text-center">
              <h2 className="h3 text-gradient mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-muted">
                Find answers to common queries about our department
              </p>
            </div>
          </motion.div>

          <motion.div
            className="row justify-content-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                {faqs.map((faq, index) => (
                  <motion.div
                    variants={fadeIn}
                    key={index}
                    className="accordion-item border-0 mb-3 rounded-lg shadow-sm"
                  >
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded="false"
                        aria-controls={`collapse${index}`}
                      >
                        <i className="bi bi-question-circle me-2 text-primary"></i>
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`heading${index}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p className="mb-0">{faq.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={fadeIn}
                className="more-questions text-center mt-5"
              >
                <p className="mb-3">Still have questions?</p>
                <a
                  href="#contact-form"
                  className="btn btn-outline-primary rounded-pill px-4"
                >
                  Contact Us Directly <i className="bi bi-chat-dots ms-2"></i>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Connect With Us Section */}
      <section className="connect-section py-5 bg-light">
        <div className="container">
          <motion.div
            className="row justify-content-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="col-lg-10">
              <div className="connect-card rounded-lg p-4 p-lg-5 text-center">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="h3 text-gradient mb-4">Connect With Us</h2>
                  <p className="mb-4">
                    Follow us on social media to stay updated with department
                    news and events
                  </p>

                  <div className="social-links">
                    {[
                      "facebook",
                      "twitter",
                      "linkedin",
                      "instagram",
                      "youtube",
                    ].map((platform, index) => (
                      <motion.a
                        key={platform}
                        href="#"
                        className={`social-link ${platform}`}
                        whileHover={{ y: -5, scale: 1.1 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <i className={`bi bi-${platform}`}></i>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .contact-page {
          --primary: #4361ee;
          --primary-dark: #3a0ca3;
          --accent: #f72585;
          --light: #f8f9fa;
          --dark: #212529;
          --transition: all 0.3s ease;
          overflow-x: hidden;
        }

        /* Hero Section */
        .contact-hero-section {
          min-height: 70vh;
          background: linear-gradient(135deg, #4361ee, #3a0ca3);
          position: relative;
        }

        /* Particles Animation */
        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.4;
          animation-name: float-particle;
          animation-timing-function: cubic-bezier(0.1, 0.67, 0.83, 0.67);
          animation-iteration-count: infinite;
          background: rgba(255, 255, 255, 0.8);
        }

        .p1 {
          width: 80px;
          height: 80px;
          left: 10%;
          top: 20%;
          animation-duration: 25s;
        }

        .p2 {
          width: 40px;
          height: 40px;
          left: 30%;
          top: 70%;
          animation-duration: 30s;
          animation-delay: 2s;
        }

        .p3 {
          width: 60px;
          height: 60px;
          left: 70%;
          top: 30%;
          animation-duration: 28s;
          animation-delay: 5s;
        }

        .p4 {
          width: 30px;
          height: 30px;
          left: 40%;
          top: 15%;
          animation-duration: 20s;
          animation-delay: 8s;
        }

        .p5 {
          width: 50px;
          height: 50px;
          left: 65%;
          top: 65%;
          animation-duration: 22s;
          animation-delay: 1s;
        }

        .p6 {
          width: 70px;
          height: 70px;
          left: 20%;
          top: 50%;
          animation-duration: 32s;
          animation-delay: 3s;
        }

        @keyframes float-particle {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(100px, 50px) rotate(90deg);
          }
          50% {
            transform: translate(50px, 100px) rotate(180deg);
          }
          75% {
            transform: translate(-50px, 50px) rotate(270deg);
          }
          100% {
            transform: translate(0, 0) rotate(360deg);
          }
        }

        /* Contact Wave SVG */
        .contact-wave {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 70%;
          width: 400%;
          pointer-events: none;
        }

        /* Contact Info Cards */
        .contact-card {
          background-color: white;
          transition: var(--transition);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .contact-icon-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          font-size: 28px;
        }

        /* Form Styles */
        .contact-form-container {
          position: relative;
          z-index: 2;
        }

        .form-control:focus,
        .form-select:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 0.25rem rgba(67, 97, 238, 0.25);
        }

        .btn-primary {
          background-color: var(--primary);
          border-color: var(--primary);
          transition: var(--transition);
        }

        .btn-primary:hover {
          background-color: var(--primary-dark);
          border-color: var(--primary-dark);
        }

        /* Map Styles */
        .map-container {
          position: relative;
          min-height: 500px;
        }

        .map-placeholder {
          background-image: url("/api/placeholder/800/500");
          background-size: cover;
          background-position: center;
          height: 100%;
          position: relative;
        }

        .map-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(67, 97, 238, 0.85),
            rgba(58, 12, 163, 0.9)
          );
          text-align: center;
          padding: 20px;
        }

        .map-pin {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: var(--accent);
          font-size: 24px;
          color: white;
        }

        /* FAQ Accordion */
        .accordion-item {
          overflow: hidden;
        }

        .accordion-button:not(.collapsed) {
          background-color: rgba(67, 97, 238, 0.1);
          color: var(--primary);
          box-shadow: none;
        }

        .accordion-button:focus {
          box-shadow: none;
          border-color: rgba(67, 97, 238, 0.1);
        }

        /* Connect Section */
        .connect-card {
          background-color: white;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }

        .social-link {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #f8f9fa;
          color: var(--dark);
          font-size: 20px;
          transition: var(--transition);
          text-decoration: none;
        }

        .social-link:hover {
          color: white;
        }

        .social-link.facebook:hover {
          background-color: #3b5998;
        }

        .social-link.twitter:hover {
          background-color: #1da1f2;
        }

        .social-link.linkedin:hover {
          background-color: #0077b5;
        }

        .social-link.instagram:hover {
          background-color: #e1306c;
        }

        .social-link.youtube:hover {
          background-color: #ff0000;
        }

        /* Utility Classes */
        .rounded-lg {
          border-radius: 0.75rem !important;
        }

        .shadow-hover {
          transition: box-shadow 0.3s ease;
        }

        .shadow-hover:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .text-gradient {
          background: linear-gradient(135deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default Contact;
