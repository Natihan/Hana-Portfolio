import React from "react";
import { motion } from "framer-motion";
import Asana from "../assets/tech/asana.png";
import Monday from "../assets/tech/monday.png";
import Slack from "../assets/tech/slack.png";
import Teams from "../assets/tech/teams.jpg";
import Trello from "../assets/tech/trello.png";
import Google from "../assets/tech/google.png";
import Calendly from "../assets/tech/calendly.png";
import Canva from "../assets/tech/canva.png";
import Zoho from "../assets/tech/zoho.png";
import Zoom from "../assets/tech/zoom.png";

const tools = [
  { name: "Asana", image: Asana },
  { name: "Monday.com", image: Monday },
  { name: "Slack", image: Slack },
  { name: "Microsoft Teams", image: Teams },
  { name: "Trello", image: Trello },
  { name: "Google Workspace", image: Google },
  { name: "Calendly", image: Calendly },
  { name: "Canva", image: Canva },
  { name: "Zoho", image: Zoho },
  { name: "Zoom", image: Zoom },
];

const TechnicalProficiency = () => {
  return (
    <div className="container mx-auto px-6 lg:px-20 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        🛠️ Technical Proficiency
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition-all"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 180 }}
          >
            <img
              src={tool.image}
              alt={tool.name}
              className="w-20 h-20 object-contain"
              loading="lazy"
            />
            <p className="mt-3 text-gray-700 font-semibold text-sm text-center">
              {tool.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalProficiency;
