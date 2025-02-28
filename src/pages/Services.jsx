import React from "react";
import { motion } from "framer-motion";
import { FaCalendarCheck, FaTasks, FaUsers, FaSearch, FaEnvelope, FaClipboardList, FaComments } from "react-icons/fa";

const services = [
  { id: 1, title: "Administrative Support", description: "Email & Calendar Management, Data Entry", icon: <FaEnvelope /> },
  { id: 2, title: "Project Management", description: "Workflow Optimization, Reporting", icon: <FaTasks /> },
  { id: 3, title: "Scheduling of Meetings & Appointments", description: "Efficiently manage your schedule", icon: <FaCalendarCheck /> },
  { id: 4, title: "Social Media Management", description: "Content Scheduling, Engagement Tracking", icon: <FaUsers /> },
  { id: 5, title: "Customer Support", description: "Responding to inquiries, Managing CRM System", icon: <FaComments /> },
  { id: 6, title: "Event Planning", description: "Organizing events from start to finish", icon: <FaClipboardList /> },
  { id: 7, title: "Internet Research", description: "Gathering insights & data", icon: <FaSearch /> },
];

const Services = () => {
  return (
    <div className="container mx-auto px-6 lg:px-20 py-16 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-10">💼 Services I Provide</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="text-4xl text-blue-600 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
