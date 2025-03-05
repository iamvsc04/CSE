import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Laboratories = () => {
  const [selectedLab, setSelectedLab] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const laboratories = [
    {
      name: "Apple Laboratory",
      image: "/images/applelab.jpg",
      title: "Innovative Computing Hub",
      description: "A state-of-the-art space with 30 Apple Mac Pro systems dedicated to advanced research and iOS development.",
      icon: "bi-apple",
      color: "dark",
      location: "CB 104",
      category: "Computing"
    },
    {
      name: "Java Programming Laboratory",
      image: "/images/laboratories/309CM.JPG",
      title: "Enterprise Programming Center",
      description: "Advanced Java development environment with 70 high-performance i5 and i7 systems for core and advanced programming.",
      icon: "bi-code-slash",
      color: "primary",
      location: "CM 308 & 309",
      category: "Programming"
    },
    {
      name: "Web Engineering Laboratory",
      image: "/images/laboratories/ProjectsLab1.JPG",
      title: "Digital Innovation Center",
      description: "Cutting-edge web technologies lab with 68 i5 systems for full-stack development using Angular, React, and NodeJS.",
      icon: "bi-display",
      color: "success",
      location: "Library II Floor",
      category: "Web Development"
    },
    {
      name: "Data Visualization Laboratory",
      image: "/images/laboratories/CBC2 AB.JPG",
      title: "Analytics & Insights Lab",
      description: "Specialized data science space with 66 Acer computers for advanced visualization, Python, and Android development.",
      icon: "bi-bar-chart-line",
      color: "info",
      location: "CB C2A and C2B Cellar",
      category: "Data Science"
    },
    {
      name: "Database Management Systems Laboratory",
      image: "/images/laboratories/112 CB.JPG",
      title: "Database Systems Hub",
      description: "Comprehensive backend development lab with 65 Acer computers for advanced database management and implementation.",
      icon: "bi-database",
      color: "warning",
      location: "CB 111 and 112",
      category: "Database"
    },
    {
      name: "IoT Laboratory",
      image: "/images/laboratories/204 CB.JPG",
      title: "Connected Technologies Studio",
      description: "Cutting-edge IoT research center with 65 Acer computers, IoT sensors, Raspberry Pi kits, and Linux programming capabilities.",
      icon: "bi-cpu",
      color: "danger",
      location: "CB 203 and 204",
      category: "IoT"
    },
    {
      name: "Analytics Lab",
      image: "/images/laboratories/CBC3 B.JPG",
      title: "Data Science Center",
      description: "Advanced analytics lab with 65 Acer computers for data mining, machine learning, and advanced statistical analysis.",
      icon: "bi-graph-up",
      color: "secondary",
      location: "CB C3A and C3B Cellar",
      category: "Data Science"
    },
    {
      name: "Datastructures Labs",
      image: "/images/laboratories/304 FB.JPG",
      title: "Programming Fundamentals",
      description: "Extensive lab with 200 Acer systems dedicated to foundational programming and data structures using C.",
      icon: "bi-code-square",
      color: "primary",
      location: "FB 204, 205, 304, 305, CM 209, and MB 305",
      category: "Programming"
    },
    {
      name: "English Language Communication Skills Lab",
      image: "/images/laboratories/ELCS Lab 1 113 FB.JPG",
      title: "Communication Skills Center",
      description: "Specialized lab with 100 Acer systems for enhancing English language communication and professional skills.",
      icon: "bi-chat-text",
      color: "success",
      location: "FB 207, 208, and FB 113",
      category: "Communication"
    },
    {
      name: "Engineering Drawing and Graphics Lab",
      image: "/images/laboratories/318 FB.JPG",
      title: "Design and Visualization Studio",
      description: "Comprehensive design lab with 200 Acer systems for advanced engineering drawing and graphics using AutoCAD.",
      icon: "bi-vector-pen",
      color: "info",
      location: "FB 315, 316, 318, 319, and CM 216, 217",
      category: "Design"
    },
    {
      name: "IT Workshop Laboratory",
      image: "/images/laboratories/IT Workshop FB 116.JPG",
      title: "Technology Integration Lab",
      description: "Versatile lab with 170 Acer systems for system interfacing, web technologies, and computer information systems.",
      icon: "bi-laptop",
      color: "warning",
      location: "FB 116, 117, 307, 308, and PG 402",
      category: "IT"
    },
    {
      name: "Computer Center",
      image: "/images/laboratories/Computer Centre.JPG",
      title: "Research Resource Center",
      description: "Dedicated research space with 65 Acer systems for in-depth exploration of academic and technological resources.",
      icon: "bi-pc-display",
      color: "dark",
      location: "MB 204",
      category: "Research"
    }
  ];

  const categories = ['All', ...new Set(laboratories.map(lab => lab.category))];

  const filteredLaboratories = activeFilter === 'All' 
    ? laboratories 
    : laboratories.filter(lab => lab.category === activeFilter);

  const handleLabClick = (lab) => {
    setSelectedLab(lab);
  };

  return (
    <div className="bg-light">
      {/* Hero Section */}
      <div className="position-relative bg-primary text-white">
        <div className="container py-5 position-relative">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4 text-white">
                Department Laboratories
              </h1>
              <p className="lead opacity-75 mb-0">
                Cutting-edge technological spaces designed to transform academic learning into real-world innovation and research excellence.
              </p>
            </div>
            <div className="col-lg-4 text-end d-none d-lg-block">
              <i className="bi bi-laptop-fill" style={{fontSize: '10rem', opacity: 0.1, color: 'white'}}></i>
            </div>
          </div>
        </div>
      </div>

      {/* Laboratory Filters */}
      <div className="container py-4">
        <div className="d-flex justify-content-center flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`btn ${activeFilter === category ? 'btn-primary' : 'btn-outline-primary'} btn-sm`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Laboratories Grid */}
      <div className="container py-4">
        <div className="row g-4">
          {filteredLaboratories.map((lab, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div 
                className="card border-0 shadow-lg hover-lift cursor-pointer position-relative overflow-hidden"
                onClick={() => handleLabClick(lab)}
                style={{
                  transition: 'all 0.3s ease',
                  transform: 'scale(1)',
                  perspective: '1000px'
                }}
              >
                <div className="position-relative">
                  <img 
                    src={lab.image} 
                    className="card-img-top" 
                    alt={lab.name}
                    style={{
                      height: '300px',
                      objectFit: 'cover',
                      filter: 'brightness(0.8)'
                    }}
                  />
                  <div className="card-img-overlay d-flex align-items-end p-3">
                    <div className="bg-dark bg-opacity-50 p-2 rounded text-white">
                      <h5 className="card-title mb-0">{lab.name}</h5>
                      <small className="text-white-50">{lab.location}</small>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className={`bg-${lab.color}-soft p-3 rounded-circle me-3`}
                    >
                      <i 
                        className={`bi ${lab.icon} text-${lab.color} fs-4`}
                      ></i>
                    </div>
                    <h3 className="h5 mb-0 text-muted">{lab.title}</h3>
                  </div>
                  <p className="text-muted">{lab.description}</p>
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge bg-primary">{lab.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lab Details Modal */}
      {selectedLab && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content shadow-lg">
              <div className="modal-header border-0 pb-0">
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setSelectedLab(null)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <img 
                      src={selectedLab.image} 
                      className="img-fluid rounded-3 shadow-lg" 
                      alt={selectedLab.name}
                    />
                  </div>
                  <div className="col-md-6">
                    <span className="badge bg-primary mb-3">{selectedLab.category}</span>
                    <h2 className="h3 mb-3">{selectedLab.name}</h2>
                    <h4 className="text-muted mb-3">{selectedLab.title}</h4>
                    <p className="lead text-muted">{selectedLab.description}</p>
                    <div className="d-flex align-items-center">
                      <i className={`bi ${selectedLab.icon} text-primary me-3 fs-2`}></i>
                      <div>
                        <strong>Location:</strong> {selectedLab.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Laboratories;