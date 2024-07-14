import React from "react";

function Head() {
  return (
    <div className="w-screen mx-auto mt-28 inline-block sm:mt-8">
      <div className="inline-block w-96 h-30 bg-transparent rounded-lg sm:w-60 sm:h-32">
        <img
          src="./images/images.png"
          className="w-96 h-52 inline-block rounded-lg shadow-md -mt-48 sm:w-60 sm:h-32 sm:mt-0"
          data-aos="fade-right"
          data-aos-duration="500"
          alt="Head"
        />
      </div>

      <div
        className="inline-block w-1/2 ml-8 p-4 sm:w-full sm:ml-0 sm:mt-8"
        data-aos="fade-left"
        data-aos-duration="500"
      >
        <h1 className="text-3xl sm:text-2xl text-blue2">
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
