import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg";
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 lg:px-20 bg-gray-100"
    >
      {/* Left Content */}
      <div className="text-center lg:text-left lg:w-1/2">
        <h1 className="text-5xl font-bold mt-4">
          Hi, I am <span className="text-gray-900">Hana Teshome</span>
        </h1>
        <h2 className="text-3xl font-bold mt-3">
          <span className="text-red-600">a</span> Professional Virtual <br />
          <span className="text-red-600">Assistant.</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          I am a dedicated virtual assistant who excels at organizing tasks and managing schedules.
          I streamline workflows and enhance productivity with efficiency and precision.
        </p>

        {/* Social Icons */}
        <div className="mt-6">
          <p className="text-lg font-semibold">Find Me</p>
          <div className="flex justify-center lg:justify-start gap-4 mt-2">
            <a href="mailto:hanitanat79@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="text-red-600 text-2xl cursor-pointer hover:text-gray-800" />
            </a>
            <a href="https://www.linkedin.com/in/hannateshome" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-blue-700 text-2xl cursor-pointer hover:text-blue-900" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Content (Smaller Stylish Rectangle Profile Image) */}
      <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
        <div className="relative w-[280px] h-[360px] lg:w-[350px] lg:h-[450px] overflow-hidden rounded-2xl shadow-xl border-4 border-gray-300 bg-gradient-to-r from-red-400 to-pink-500 p-1">
          <img
            src={profilePic}
            alt="Profile"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
