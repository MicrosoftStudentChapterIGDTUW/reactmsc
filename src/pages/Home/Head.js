import React from "react";
import { useNavigate } from "react-router-dom";

function Head() {
  const navigate = useNavigate();

  const buttonStyle = {
    width: '20vw',
    fontSize: '1rem',
    padding: '0.5%',
    bottom: '1vh'
  };

  const mediaQuery = window.matchMedia("(max-width: 760px)");
  if (mediaQuery.matches) {
    buttonStyle.fontSize = '0.8rem';
    buttonStyle.padding = '0.1%';
  }

  return (
    <div className="w-full mx-auto inline-block">
      <div className="inline-block w-full h-auto bg-transparent rounded-lg relative">
        {/*}
          <img
            src="./images/HACK-IT-UP-HomePage-Mobile.jpg"
            alt="mobile version"
            className="absolute sm:hidden w-full mx-auto" // hidden on medium screens and up, visible below
          />
          */}
          {/* Visible on larger screens, hidden on mobile */}
          
          <img
            src="./images/HACK-IT-UP-HomePage.jpg"
            alt="desktop version"
            className="sm:block w-full" // visible on medium screens and up, hidden below
          />
          
        
        <div
          onClick={() => navigate("/hackitup")}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2
            cursor-pointer bg-blue-600 hover:bg-blue-900 rounded-xl
            text-white text-xl md:text-lg sm:text-sm transition duration-300 ease-in-out text-center"
          style={buttonStyle} // Inline CSS for width and font size
          
          // data-aos="fade-left"
          data-aos-duration="200"
        >
          Know More!
        </div>
      </div>

      

      <div
        className="inline-block w-1/2 ml-8 p-4 sm:w-full sm:ml-0 sm:mt-8"
        data-aos="fade-left"
        data-aos-duration="500"
      >
        <div className="text-center text-[#1B2F4F] text-5xl mt-20 sm:mt-12">
          Microsoft Student Chapter IGDTUW
        </div>
        <p className="text-lg mb-8 mt-8 font-medium sm:mt-8">
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
