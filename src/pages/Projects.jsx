import React, { useState } from "react";
import { motion } from "framer-motion";
import VideoCampaignImg from "../assets/VideoCampaign.PNG";
import SocialMediaCalenderImg from "../assets/SocialMediaCalender.PNG";
import SchedulingMeetingImg from "../assets/SchedulingMeeting.jpg";
import ProjectManagementImg from "../assets/ProjectManagement.PNG";
import CalenderManagmentImg from "../assets/CalenderManagment.PNG";
import { FaTimes } from "react-icons/fa"; // Close icon

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
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-80 h-56 rounded-lg shadow-lg object-cover cursor-pointer"
              onClick={() => setSelectedImage(project.image)}
            />
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="mt-2 text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>

      {/* Full-Screen Image Modal */}
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
            <img src={selectedImage} alt="Full View" className="max-w-[90vw] max-h-[90vh] rounded-lg" />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
