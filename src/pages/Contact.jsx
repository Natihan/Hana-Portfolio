import React, { useState } from "react";
import { motion } from "framer-motion";
import EmailIcon from "../assets/email-icon.jpg"; // Adjust path if needed

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Full Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.subject) tempErrors.subject = "Subject is required";
    if (!formData.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      setTimeout(() => setSuccessMessage(""), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto px-6 lg:px-20 py-16 min-h-screen flex flex-col items-center justify-center">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        📩 Let's Connect
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 items-center w-full max-w-5xl">
        {/* Left Section - Contact Info */}
        <div className="space-y-6 text-center md:text-left">
          <p className="text-6xl font-extrabold text-gray-900">Let’s create something together</p>
          <div className="flex items-center justify-center md:justify-start space-x-4">
            <img src={EmailIcon} alt="Email" className="w-10 h-10" />
            <p className="text-lg font-bold">
              Mail Me At <br />
              <a href="mailto:hanitanat79@gmail.com" className="text-blue-600 underline">
                hanitanat79@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full">
          <h3 className="text-lg font-semibold mb-4">Send me a message <span className="ml-1">📩</span></h3>
          {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Full Name" className="w-full p-3 border rounded-md" value={formData.name} onChange={handleChange} required />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            <input type="email" name="email" placeholder="Email address" className="w-full p-3 border rounded-md" value={formData.email} onChange={handleChange} required />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            <input type="text" name="subject" placeholder="Subject" className="w-full p-3 border rounded-md" value={formData.subject} onChange={handleChange} required />
            {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
            <textarea name="message" placeholder="Tell me about your project" className="w-full p-3 border rounded-md h-28" value={formData.message} onChange={handleChange} required></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            <button type="submit" className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
