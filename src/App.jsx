import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Certifications from "./pages/Certifications";
import TechnicalProficiency from "./pages/TechnicalProficiency";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="bg-gradient-to-b from-gray-100 via-white to-gray-50 min-h-screen pt-20">
        <main className="container mx-auto px-4 pb-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/technical-proficiency" element={<TechnicalProficiency />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
