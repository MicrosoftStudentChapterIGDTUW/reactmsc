import React, { useState } from "react";
// import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Judges() {
  const [activeCard, setActiveCard] = useState(null);

  const judges = [
    {
      id: 1,
      name: "To be Announced",
      image: "https://via.placeholder.com/345x140",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.",
      detailedDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
    },
    {
      id: 2,
      name: "To be Announced",
      image: "https://via.placeholder.com/345x140",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.",
      detailedDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
    },
    {
      id: 3,
      name: "To be Announced",
      image: "https://via.placeholder.com/345x140",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.",
      detailedDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
    },
  ];

  return (
    <div className="min-h-screen p-5 md:p-8">
      <h1 className="mt-8 text-3xl md:text-5xl lg:text-[5em] md:text-[5em] text-center font-['Bebas_Neue'] text-[#012147] animate-fadeIn">
        Judges
      </h1>
      
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-8 md:mt-12">
        {judges.map((judge) =>
          activeCard === judge.id ? (
            <div
              key={judge.id}
              className="w-full md:w-[350px] bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 animate-jumpIn"
            >
              <CardContent className="p-6">
                <Typography
                  variant="h5"
                  className="text-[#182B46] font-bold text-center mb-4"
                >
                  {judge.name}
                </Typography>
                <Typography
                  variant="body2"
                  className="text-[#182B46] text-sm leading-relaxed text-justify px-4"
                >
                  {judge.detailedDescription}
                </Typography>
                <Button
                  size="small"
                  onClick={() => setActiveCard(null)}
                  className="mt-4 w-[90%] bg-white text-[#00509e] font-bold rounded-lg capitalize hover:bg-white hover:text-[#00509e]"
                >
                  Back
                </Button>
              </CardContent>
            </div>
          ) : (
            <div
              key={judge.id}
              className="w-full md:w-[350px] h-[400px] bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 flex flex-col animate-jumpIn"
            >
              <CardMedia
                className="h-[180px] object-cover bg-[#cce7ff]"
                image={judge.image}
                title={judge.name}
              />
              <CardContent className="flex-grow p-6">
                <Typography
                  variant="h5"
                  className="text-[#003366] font-bold text-center mb-4"
                >
                  {judge.name}
                </Typography>
                <Typography
                  variant="body2"
                  className="text-[#003366] text-sm leading-relaxed text-justify px-4"
                >
                  {judge.description}
                </Typography>
              </CardContent>
              <div className="p-4">
                <Button
                  size="small"
                  onClick={() => setActiveCard(judge.id)}
                  className="w-[90%] bg-white text-[#00509e] font-bold rounded-lg capitalize hover:bg-white hover:text-[#00509e]"
                >
                  Learn More
                </Button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
