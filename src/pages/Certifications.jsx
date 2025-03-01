import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import Cert1 from "../assets/certificates/AlX-Africa-VA.jpg";
import Cert2 from "../assets/certificates/Data-Analytics.png";
import Cert3 from "../assets/certificates/MSc.jpg";

const certificates = [
  { id: 1, title: "ALX Virtual Assistant", image: Cert1 },
  { id: 2, title: "EXPLORE AI Data Analytics", image: Cert2 },
  { id: 3, title: "Masters Degree In Civil Engineering", image: Cert3 },
];

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container mx-auto px-6 lg:px-20 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">📜 Certifications</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            className="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => setSelectedImage(cert.image)}
          >
            <img src={cert.image} alt={cert.title} className="w-full h-48 object-cover rounded-md" />
            <h3 className="mt-4 font-semibold">{cert.title}</h3>
          </motion.div>
        ))}
      </div>

      {/* Full-Screen Modal */}
      {selectedImage && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <FaTimes
              className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
              onClick={() => setSelectedImage(null)}
            />
            <img
              src={selectedImage}
              alt="Full View"
              className="max-w-[90vw] max-h-[90vh] rounded-lg"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Certificates;
