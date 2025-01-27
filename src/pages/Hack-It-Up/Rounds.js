// RoundsComponent.jsx
import React from 'react';
import './Rounds.css';

const RoundsComponent = () => {
  const rounds = [
    {
      title: "Ideation Round",
      description: "Participants brainstorm and refine innovative solutions based on the given problem statements. Teams identify key problems, explore creative ideas, and collaborate. Shortlisted teams will advance to the Prototype Round to develop their concepts further."
    },
    {
      title: "Prototype Round",
      description: "Shortlisted teams build functional prototypes to showcase their solutions. Judges evaluate creativity, technical execution, and impact. The top teams will move on to the Finale Round to compete for the win."
    },
    {
      title: "Finale",
      description: "The top teams present their refined prototypes to a panel of judges. Teams will pitch their solutions, demonstrating impact and scalability, with the best team crowned as the winner."
    }
  ];

  return (
    <div className="rounds-container">
      <h1 className="rounds-title">HACK IT UP 2025</h1>
      <div className="rounds-grid">
        {rounds.map((round, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2>{round.title}</h2>
              </div>
              <div className="flip-card-back">
                <p>{round.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoundsComponent;