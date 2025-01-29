import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./judges.css";

export default function Judges() {
  const [activeCard, setActiveCard] = useState(null);

  const judges = [
    {
      id: 1,
      name: "To be Announced",
      image: "https://via.placeholder.com/345x140", // Replace with actual working link
      description:
        "-",
      detailedDescription:
        "-",
    },
    {
      id: 2,
      name: "To be Announced",
      image: "https://via.placeholder.com/345x140", // Replace with actual working link
      description:
        "-",
      detailedDescription:
        "-",
    },
    {
      id: 3,
      name: "To be Announced",
      image: "https://via.placeholder.com/345x140", // Replace with actual working link
      description:
        "-",
      detailedDescription:
        "-",
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
