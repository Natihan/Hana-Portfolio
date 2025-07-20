import { motion } from "framer-motion";
import ProfileImage from "../assets/profile-2.JPG"; // Ensure correct path

const About = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center"
      >
        {/* Text Section */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            Hi, I’m <span className="font-semibold">Hana Teshome</span>, a dedicated Virtual Assistant with a knack 
            for organization, efficiency, and seamless operations. I help businesses and entrepreneurs stay on top 
            of their tasks by handling email and calendar management, research, project management, and administrative 
            support—so they can focus on growth.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed text-justify">
          With experience working remotely for U.S.-based companies, I’ve successfully managed high-volume emails, 
          scheduled meetings across time zones, optimized workflows, and contributed to product launches. My expertise 
          in tools like Google Workspace, Monday.com, Asana, and Slack ensures smooth collaboration and productivity.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed text-justify">
          I thrive on structure, problem-solving, and delivering high-quality work. Whether it’s keeping your inbox 
          in check, streamlining your schedule, or providing top-notch support, I’m here to make your life easier.
          </p>
        </div>
  
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={ProfileImage}
            alt="Hana Teshome"
            className="w-80 h-96 rounded-2xl shadow-lg object-cover"
          />
        </div>
      </motion.div>
    );
};

export default About;
