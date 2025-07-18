import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import Cert1 from "../assets/certificates/AlX-Africa-VA.jpg";
import Cert2 from "../assets/certificates/Data-Analytics.jpg";
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
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        📜 Certifications
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl cursor-pointer transition-all"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => setSelectedImage(cert.image)}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="mt-4 font-semibold text-gray-700">{cert.title}</h3>
          </motion.div>
        ))}
      </div>

      {/* Full-Screen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <FaTimes
                className="absolute -top-4 -right-4 text-white text-3xl cursor-pointer bg-red-600 rounded-full p-1"
                onClick={() => setSelectedImage(null)}
              />
              <img
                src={selectedImage}
                alt="Full View"
                className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certificates;
