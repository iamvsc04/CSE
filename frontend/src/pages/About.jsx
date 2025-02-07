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
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Hero Section */}
        <div className="relative h-64 bg-blue-600 overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              opacity: "0.2",
            }}
          />
          <div className="relative z-10 h-full flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
              About the CSE Department
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <BookOpen className="w-8 h-8 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-800">Our Story</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The Computer Science and Engineering Department at
                <span className="font-semibold text-blue-600">
                  {" "}
                  CVR College of Engineering
                </span>
                is dedicated to academic excellence and innovation. Our mission
                is to equip students with cutting-edge knowledge and
                industry-relevant skills.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-800">
                  Why Choose Us?
                </h2>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Highly qualified faculty with diverse expertise
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  State-of-the-art laboratories
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Strong industry collaborations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Excellent placement records
                </li>
              </ul>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-8 h-8 text-blue-600 mr-4" />
                  <h2 className="text-2xl font-bold text-gray-800">
                    Our Vision
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To be a center of excellence in Computer Science and
                  Engineering education, fostering innovation, research, and
                  leadership to address global challenges.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-blue-600 mr-4" />
                  <h2 className="text-2xl font-bold text-gray-800">
                    Our Mission
                  </h2>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                    Provide high-quality technical education
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                    Promote research and innovation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                    Encourage industry-academia collaboration
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Placements & Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Building2 className="w-8 h-8 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-800">Placements</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our students are placed in top companies like Google, Microsoft,
                Amazon, and Infosys, with competitive salary packages.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Google", "Microsoft", "Amazon", "Infosys"].map((company) => (
                  <span
                    key={company}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Phone className="w-8 h-8 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-center">
                  <span className="w-6 text-blue-600">📍</span>
                  CVR College of Engineering, Hyderabad
                </p>
                <p className="flex items-center">
                  <span className="w-6 text-blue-600">📧</span>
                  cse@cvr.ac.in
                </p>
                <p className="flex items-center">
                  <span className="w-6 text-blue-600">📞</span>
                  +91-XXXXXXXXXX
                </p>
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
