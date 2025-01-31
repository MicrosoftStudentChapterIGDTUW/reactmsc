import React from "react";
import { Link } from "react-router-dom";
import devfoliologo from "./images/sponsors/devfolio.png";
import ethindialogo from "./images/sponsors/ethindia.svg";
import interviewbuddylogo from "./images/sponsors/interviewbuddy.svg";
import polygonlogo from './images/sponsors/polygon.png';

const Sponsorship = () => {
  const sponsors = [
    { id: 1, image: devfoliologo, alt: "Devfolio" },
    { id: 2, image: polygonlogo, alt: "Polygon" },
    { id: 3, image: ethindialogo, alt: "EthIndia" },
    { id: 4, image: interviewbuddylogo, alt: "Interview Buddy" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mt-8 text-3xl md:text-5xl lg:text-[5em] text-center font-['Bebas_Neue'] text-[#012147]">
        Our Sponsors
      </h1>

      {/* Grid container for sponsor logos */}
      <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-x-8 md:gap-x-12">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.id}
            className="sponsor-logo flex justify-center items-center p-4 w-full sm:w-[80vw] md:w-[40vw] lg:w-[25vw]"
          >
            <img
              src={sponsor.image}
              alt={sponsor.alt}
              className="w-full max-w-[200px] md:max-w-[250px] lg:max-w-xs 
                        transform transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Optional: Add a CTA section for potential sponsors */}
      <div className="mt-12 text-center">
        <p className="text-lg md:text-xl text-[#012147] mb-4">
          Interested in becoming a sponsor?
        </p>
        <Link
          to="/contact"
          className="bg-[#012147] text-white px-6 py-2 rounded-lg 
             hover:bg-[#023373] transition-colors duration-300
             text-sm md:text-base inline-block"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Sponsorship;
