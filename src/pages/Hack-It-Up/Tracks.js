import React from "react";
import { motion } from "framer-motion";

const Tracks = () => {
  const tracks = [
    {
      title: "MedTech (Healthcare Technology)",
      details:
        "Create innovative applications to improve healthcare services, from patient management and remote monitoring to health education and preventive care. Address challenges in accessibility, affordability, or healthcare delivery systems.",
    },
    {
      title: "FinTech (Financial Technology)",
      details:
        "Build systems to enhance financial inclusion, simplify personal finance management, or improve transaction security. Applications could range from budgeting tools and investment platforms to payment gateways and fraud detection systems.",
    },
    {
      title: "GreenTech (Sustainability and Environment)",
      details:
        "Design technologies that promote sustainability and environmental conservation. Ideas could include smart systems for waste management, platforms to track carbon footprints, or tools for efficient energy consumption.",
    },
    {
      title: "Social Impact (Technology for Community and Society)",
      details:
        "Build solutions that address social challenges such as education inequality, public safety, disaster management, or access to essential services. Focus on creating platforms or applications that empower communities and drive social change.",
    },
    {
      title: "Youth Empowerment (Technology for the Next Generation)",
      details:
        "Create solutions that address the needs and aspirations of young people. Ideas could include platforms for skill development, mental health support, career guidance, creative expression, or fostering social connections. Focus on building tools that inspire, empower, and connect the youth to opportunities and resources worldwide.",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-white-100 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Hackathon Tracks</h1>
      <div className="w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }} // Leftward motion
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        >
          {[...tracks, ...tracks].map((track, index) => (
            <div
              key={index}
             className="bg-gradient-to-r from-blue-300 to-blue-900 shadow-lg rounded-lg p-6 w-[350px] h-[290px] text-center text-white flex flex-col justify-center items-center transform transition-transform duration-300 hover:scale-105 flex-shrink-0"
            >
              <p className="text-xl font-semibold">{track.title}</p>
              <p className="mt-2 text-sm">{track.details}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Tracks;
