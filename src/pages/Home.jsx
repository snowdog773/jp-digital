import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import mesh from "../assets/mesh.jpg";

// Dummy data for projects
const projects = [
  {
    name: "Portfolio Website",
    url: "https://example.com",
    description: "A sleek, modern portfolio showcasing client work.",
    tech: "React, Tailwind CSS",
    thumbnail: "https://via.placeholder.com/300x200",
  },
  {
    name: "E-commerce Store",
    url: "https://example-store.com",
    description: "A fully-functional e-commerce platform.",
    tech: "Node.js, Express, MongoDB",
    thumbnail: "https://via.placeholder.com/300x200",
  },
  {
    name: "Custom Web App",
    url: "https://example-app.com",
    description: "A bespoke web app for business workflows.",
    tech: "Vue.js, Firebase",
    thumbnail: "https://via.placeholder.com/300x200",
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-gray-900 text-white min-h-screen flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${mesh})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay for the background */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        <div className="text-center max-w-2xl relative z-10">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            <span className="text-blue-400">JP</span> Design
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Your trusted partner for innovative web solutions.
          </p>
          <Link
            to="/contact"
            className="bg-blue-400 text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-blue-500 transition-transform duration-300 transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Projects</h2>
          <p className="text-lg mb-12">
            A showcase of the work we've done for our amazing clients.
          </p>

          <Swiper
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="w-full max-w-4xl mx-auto"
            spaceBetween={30}
            slidesPerView={1}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="w-full"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <p className="text-sm text-gray-500 mb-4">
                      Technologies: {project.tech}
                    </p>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 font-semibold hover:underline"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Services</h2>
          <p className="text-lg mb-12">
            From simple websites to full-stack solutions, we do it all.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m2 0a2 2 0 110-4h-1a2 2 0 100-4h-6a2 2 0 100 4H7a2 2 0 110 4h1m10 0a2 2 0 110 4h-1a2 2 0 100 4h-6a2 2 0 100-4H7a2 2 0 110-4h1"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Starter Websites</h3>
              <p className="text-gray-400 mb-4">
                Affordable and professional websites for small businesses.
              </p>
              <Link
                to="/services"
                className="text-blue-400 font-semibold hover:underline"
              >
                Learn More
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7h18M3 12h18m-5 5h5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Web Applications</h3>
              <p className="text-gray-400 mb-4">
                Build custom web applications tailored to your needs.
              </p>
              <Link
                to="/services"
                className="text-blue-400 font-semibold hover:underline"
              >
                Learn More
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16l-4-4m0 0l4-4m-4 4h16"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Full-Stack Solutions</h3>
              <p className="text-gray-400 mb-4">
                End-to-end development for complex web platforms.
              </p>
              <Link
                to="/services"
                className="text-blue-400 font-semibold hover:underline"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
