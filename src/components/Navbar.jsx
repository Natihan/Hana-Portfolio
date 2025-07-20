import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MoreVertical, X } from "lucide-react";
import Logo from "../assets/Logo.jpg";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/services", label: "Services" },
  { path: "/certifications", label: "Certifications" },
  { path: "/technical-proficiency", label: "Tech Skills" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="Hana Teshome Logo" className="w-10 h-10 rounded-full" />
          <span className="text-xl font-bold text-gray-800">Hana Teshome</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-lg text-gray-800">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `hover:text-red-600 transition-colors ${
                    isActive ? "text-red-600 font-semibold" : ""
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden focus:outline-none text-gray-800"
        >
          {isOpen ? <X size={28} /> : <MoreVertical size={28} />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-40"
            >
              <ul className="flex flex-col items-center space-y-6 py-6 text-lg text-gray-800">
                {navLinks.map(({ path, label }) => (
                  <li key={path}>
                    <NavLink
                      to={path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `hover:text-red-600 transition-colors ${
                          isActive ? "text-red-600 font-semibold" : ""
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
