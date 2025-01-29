import React from 'react';
import logo1 from './images/sponsor.png';

const Sponsorship = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold text-center mb-8">Our Sponsors</h1>
      <div className="flex justify-center space-x-8">
        <div className="sponsor-logo">
          <img
            src={logo1}
            alt="Sponsor 1"
            className="max-w-xs transform transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="sponsor-logo">
          <img
            src="public/images/sponsor.png"
            alt="Sponsor 2"
            className="max-w-xs transform transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="sponsor-logo">
          <img
            src="public/images/sponsor.png"
            alt="Sponsor 3"
            className="max-w-xs transform transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsorship;
