import React from "react";
import "./Tracks.css";

const Tracks = () => {
  const tracks = [
    {
      title: "Artificial Intelligence",
      details:
        "Build AI-powered solutions to tackle real-world problems, ranging from image recognition to predictive analytics.",
    },
    {
      title: "Web Development",
      details:
        "Showcase your creativity by building innovative and responsive web applications for diverse use cases.",
    },
    {
      title: "Cybersecurity",
      details:
        "Secure systems and find vulnerabilities in applications while protecting sensitive data.",
    },
    {
      title: "Data Science",
      details:
        "Use data analysis and visualization to uncover insights and solve complex challenges.",
    },
    {
      title: "Blockchain",
      details:
        "Build decentralized applications and solutions using blockchain technology.",
    },
  ];

  return (
    <div className="tracks-container">
      <h1 className="tracks-heading">Hackathon Tracks</h1>
      <div className="tracks-slider">
        <div className="tracks-slider-inner">
          {tracks.map((track, index) => (
            <div className="track-card" key={index}>
              <p className="track-title">{track.title}</p>
              <p className="track-details">{track.details}</p>
            </div>
          ))}
          {/* Duplicate cards for infinite loop effect */}
          {tracks.map((track, index) => (
            <div className="track-card" key={`duplicate-${index}`}>
              <p className="track-title">{track.title}</p>
              <p className="track-details">{track.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tracks;
