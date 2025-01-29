import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./judges.css";

export default function Mentors() {
  const [activeCard, setActiveCard] = useState(null);

  const judges = [
    {
      id: 1,
      name: "Mr X",
      image: "https://via.placeholder.com/345x140", // Replace with actual working link
      description:
        "Judge is an AI expert with a focus on fairness in decision-making.",
      detailedDescription:
        "With expertise in modern JavaScript frameworks like React and tools such as Tailwind CSS, Judge Aakshi has crafted numerous high-performance web applications. Her passion lies in creating intuitive user interfaces and seamless user experiences. Aakshi is also a mentor, guiding aspiring developers in the art of web development and fostering innovation in the tech community",
    },
    {
      id: 2,
      name: "Mr Y",
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d", // Example public link
      description:
        "Judge Robin has a background in international law and diplomacy.",
      detailedDescription:
        "With expertise in modern JavaScript frameworks like React and tools such as Tailwind CSS, Judge Aakshi has crafted numerous high-performance web applications. Her passion lies in creating intuitive user interfaces and seamless user experiences. Aakshi is also a mentor, guiding aspiring developers in the art of web development and fostering innovation in the tech community",
    },
    {
      id: 3,
      name: "Ms Z",
      image: "https://via.placeholder.com/345x140", // Replace with actual working link
      description:
        "Judge is an accomplished web developer specializing in front-end technologies and responsive design.",
      detailedDescription:
        "With expertise in modern JavaScript frameworks like React and tools such as Tailwind CSS, Judge Aakshi has crafted numerous high-performance web applications. Her passion lies in creating intuitive user interfaces and seamless user experiences. Aakshi is also a mentor, guiding aspiring developers in the art of web development and fostering innovation in the tech community",
    },
  ];

  return (
    <div className="judges-page">
      <h1 className="judges-heading">Judges</h1>
      <div className="judges-cards">
        {judges.map((judge) =>
          activeCard === judge.id ? (
            <Card key={judge.id} className="judges-card">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {judge.name}
                </Typography>
                <Typography variant="body2" className="judges-description">
                  {judge.detailedDescription}
                </Typography>
                <Button
                  size="small"
                  onClick={() => setActiveCard(null)}
                  sx={{ marginTop: 2 }}
                >
                  Back
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card key={judge.id} className="judges-card">
              <CardMedia
                className="judges-media"
                image={judge.image}
                title={judge.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {judge.name}
                </Typography>
                <Typography variant="body2" className="judges-description">
                  {judge.description}
                </Typography>
              </CardContent>
              <Button
                size="small"
                onClick={() => setActiveCard(judge.id)}
                sx={{ margin: "0 auto", display: "block" }}
              >
                Learn More
              </Button>
            </Card>
          )
        )}
      </div>
    </div>
  );
}
