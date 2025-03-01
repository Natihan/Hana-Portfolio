import React from "react";
import { motion } from "framer-motion";
import Asana from "../assets/tech/asana.png";
import Monday from "../assets/tech/monday.PNG";
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
      <h2 className="text-3xl font-bold text-center mb-10">🛠️ Technical Proficiency</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <img src={tool.image} alt={tool.name} className="w-16 h-16 object-contain" />
            <p className="mt-2 text-gray-700 font-semibold">{tool.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalProficiency;
