import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa"; // Close icon
import VideoCampaignImg from "../assets/VideoCampaign.jpg";
import SocialMediaCalenderImg from "../assets/SocialMediaCalender.jpg";
import SchedulingMeetingImg from "../assets/SchedulingMeeting.jpg";
import ProjectManagementImg from "../assets/ProjectManagement.jpg";
import CalenderManagmentImg from "../assets/CalenderManagment.jpg";

const projects = [
  {
    title: "Video Campaign",
    description:
      "Strategic Content Planning at Vyudu.com: Developed a structured video campaign for Vyudu.com, focusing on engaging audiences with educational and promotional skincare content.",
    image: VideoCampaignImg,
  },
  {
    title: "Social Media Calendar",
    description:
      "Created a detailed social media calendar for Vyudu.com, ensuring consistent content posting and targeted audience engagement through interactive elements.",
    image: SocialMediaCalenderImg,
  },
  {
    title: "Scheduling Meetings",
    description:
      "Coordinated and managed virtual meetings for the Ethiopian Diaspora Trust Fund, ensuring seamless communication among stakeholders.",
    image: SchedulingMeetingImg,
  },
  {
    title: "Project Management",
    description:
      "Led project management efforts for the Great Rift Valley Innovation Summit, utilizing Monday.com to track tasks, deadlines, and deliverables.",
    image: ProjectManagementImg,
  },
  {
    title: "Calendar Management",
    description:
      "Effectively managed calendars and schedules for the Ethiopian Diaspora Trust Fund, organizing key meetings, deadlines, and events.",
    image: CalenderManagmentImg,
  },
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">My Projects</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-80 h-56 rounded-lg shadow-lg object-cover cursor-pointer transition-transform duration-200 hover:scale-105"
              onClick={() => setSelectedImage(project.image)}
            />
            <h3 className="text-xl font-semibold mt-4 text-gray-900">{project.title}</h3>
            <p className="mt-2 text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>

      {/* Full-Screen Image Modal */}
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
              className="relative bg-white p-4 rounded-lg max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            >
              <FaTimes
                className="absolute top-3 right-3 text-black text-2xl cursor-pointer hover:text-red-600"
                onClick={() => setSelectedImage(null)}
              />
              <img
                src={selectedImage}
                alt="Project Full View"
                loading="lazy"
                className="rounded-lg max-w-full max-h-[80vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
