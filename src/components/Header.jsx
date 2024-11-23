import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Handle header visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false); // Hide header when scrolling down
      } else {
        setShowHeader(true); // Show header when scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`bg-gray-900 text-white fixed w-full z-50 shadow-md transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          <span className="text-blue-400">JP</span> Design
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-lg font-medium hover:text-blue-400 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute left-0 w-full bg-gray-800 lg:hidden shadow-lg overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ top: "100%" }}
      >
        <ul className="flex flex-col items-center py-6">
          {navItems.map((item) => (
            <li key={item.name} className="py-2 w-full text-center">
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-white hover:text-blue-400 transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
