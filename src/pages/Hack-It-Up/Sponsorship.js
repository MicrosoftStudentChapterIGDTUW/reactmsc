import React from 'react';
import './Sponsorship.css';
import logo1 from "./images/sponsor.png";


const Sponsorship = () => {
  return (
    <div className="sponsorship-container">
      <h1 className="sponsorship-heading">Our Sponsors</h1>
      <div className="sponsor-logos">
        <div className="sponsor-logo">
          <img src={logo1} alt="Sponsor 1" />
        </div>
        <div className="sponsor-logo">
          <img src="public\images\sponsor.png" alt="Sponsor 2" />
        </div>
        <div className="sponsor-logo">
          <img src="public\images\sponsor.png" alt="Sponsor 3" />
        </div>
      </div>
    </div>
  );
};

export default Sponsorship;
