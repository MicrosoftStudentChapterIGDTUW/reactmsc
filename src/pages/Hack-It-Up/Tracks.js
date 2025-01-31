import React, { useState } from "react";
import { motion } from "framer-motion";

const TrackCard = ({ title, details, isActive = false }) => {
  return (
    <div className="relative group cursor-pointer">
      <div
        className={`bg-[#1B2F4F] shadow-lg rounded-lg 
          ${
            isActive
              ? "w-[210px] h-[340px] md:w-[350px] md:h-[290px]"
              : "w-[250px] h-[220px] opacity-50"
          } 
          text-center text-white flex flex-col justify-center items-center transition-all duration-300`}
      >
        <div classname="px-8 py-6">
          <h2
            className={`${isActive ? "text-xl" : "text-xs"} font-semibold mb-4`}
          >
            {title}
          </h2>
          <h2
            className={`${
              isActive ? "text-sm" : "text-[10px]"
            } font-light mb-4`}
          >
            {details}
          </h2>
        </div>
      </div>
    </div>
  );
};

const Tracks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
        "Create solutions that address the needs and aspirations of young people. Ideas could include platforms for skill development, mental health support, career guidance, creative expression, or fostering social connections.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === tracks.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? tracks.length - 1 : prevIndex - 1
    );
  };

  const getPrevIndex = () =>
    currentIndex === 0 ? tracks.length - 1 : currentIndex - 1;
  const getNextIndex = () =>
    currentIndex === tracks.length - 1 ? 0 : currentIndex + 1;

  return (
    <div className="flex flex-col items-center bg-white-100 py-10 px-4">
      <h1 className="mt-8 text-3xl md:text-5xl lg:text-[5em] text-center font-['Bebas_Neue'] text-[#012147]">
        Hackathon Tracks
      </h1>

      <div className="relative w-full max-w-[1200px] flex items-center justify-center overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 md:left-4 z-20 bg-white/80 p-2 rounded-full shadow-lg 
                     hover:bg-white transition-all hidden md:block"
        >
          <svg
            className="w-6 h-6 text-blue-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Cards Container */}
        <div className="flex justify-center items-center gap-2 md:gap-4">
          {/* Previous Card */}
          <TrackCard
            title={tracks[getPrevIndex()].title}
            details={tracks[getPrevIndex()].details}
          />

          {/* Current Card */}
          <TrackCard
            title={tracks[currentIndex].title}
            details={tracks[currentIndex].details}
            isActive={true}
          />

          {/* Next Card */}
          <TrackCard
            title={tracks[getNextIndex()].title}
            details={tracks[getNextIndex()].details}
          />
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 md:right-4 z-20 bg-white/80 p-2 rounded-full shadow-lg 
                     hover:bg-white transition-all hidden md:block"
        >
          <svg
            className="w-6 h-6 text-blue-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile-only navigation buttons */}
      <div className="flex justify-center gap-4 mt-4 md:hidden">
        <button
          onClick={prevSlide}
          className="bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
        >
          <svg
            className="w-6 h-6 text-blue-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
        >
          <svg
            className="w-6 h-6 text-blue-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex gap-2 mt-6">
        {tracks.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-blue-900 w-6"
                : "bg-blue-300 hover:bg-blue-400"
            }`}
          />
        ))}
      </div>

      {/* Auto-advance timer */}
      <motion.div
        className="w-full h-1 bg-blue-200 mt-4"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, repeat: Infinity }}
        onAnimationComplete={nextSlide}
      />
    </div>
  );
};

export default Tracks;
