import React from "react";
import { useNavigate } from "react-router-dom";

function Head() {
  const navigate = useNavigate();

  return (
    <div className="w-screen mx-auto inline-block">
      <div className="inline-block w-full h-auto bg-transparent rounded-lg relative">
      <div>
          <img
            src="./images/HACK-IT-UP.jpg"
            alt="mobile version"
            className="absolute md:hidden" // hidden on medium screens and up, visible below
          />

          {/* Visible on larger screens, hidden on mobile */}
          <img
            src="./images/HACK_IT_UP.jpg"
            alt="desktop version"
            className="block" // visible on medium screens and up, hidden below
          />
        </div>

        <div
          onClick={() => navigate("/hackitup")}
          className="absolute top-1/2 left-[25%] transform -translate-x-1/2 -translate-y-1/2
          cursor-pointer p-4 bg-blue-600 hover:bg-blue-900 rounded-lg
          text-white text-xl transition duration-300 ease-in-out
          md:p-3 md:text-lg
          sm:left-1/2 sm:p-2 sm:text-sm sm:w-auto sm:text-center"
        
          // data-aos="fade-up"
          // data-aos-duration="200"
        >
          Know More!
        </div>
      </div>

      <div
        className="inline-block w-1/2 ml-8 p-4 sm:w-full sm:ml-0 sm:mt-8"
        data-aos="fade-left"
        data-aos-duration="500"
      >
        <h1 className="">
          Microsoft Student Chapter IGDTUW
        </h1>
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
