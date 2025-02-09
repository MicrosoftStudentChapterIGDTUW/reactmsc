import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Head() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const buttonStyle = {
    width: isMobile ? '80vw' : '30vw', // Increased width
    fontSize: isMobile ? '1.2rem' : '1.5rem', // Increased font size
    padding: isMobile ? '3% 6%' : '1% 2%', // Increased padding
    fontWeight: '600', // Made text bolder
    letterSpacing: '0.5px' // Added letter spacing for better readability
  };
  

  return (
    <div className="w-full flex flex-col items-center">
      {/* Image Container */}
      <div className="w-full relative">
        <img
          src="./images/HACK-IT-UP-homepage.png"
          alt="hack it up banner"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Know More Button */}
      <div
        onClick={() => navigate("/hackitup")}
        className="cursor-pointer bg-[#0476D1] hover:bg-[#56E2F4] rounded-xl
          text-white transition duration-300 ease-in-out text-center
          transform hover:scale-105 my-6"
        style={buttonStyle}
        data-aos="fade-up"
        data-aos-duration="200"
      >
        Know More!
      </div>

      {/* Content Section */}
      <div className="w-full px-4 md:px-8 mt-4 md:mt-8">
        <h1 
          className="text-center text-[#1B2F4F] text-3xl md:text-5xl font-bold mb-6"
          data-aos="fade-up"
          data-aos-duration="300"
        >
          Microsoft Student Chapter IGDTUW
        </h1>
        
        <p 
          className="text-base md:text-lg text-center max-w-4xl mx-auto 
            font-medium mb-8 px-4 leading-relaxed"
          data-aos="fade-up"
          data-aos-duration="400"
        >
          We aim to equip the students with the tools that enable them to
          perform the best in the corporate environment right from their
          starting of programming to interviews to the internship and project
          presentation not only as an engineer but in a lot of other domains
          that remain largely unexplored.
        </p>
      </div>
    </div>
  );
}

export default Head;