import React from 'react';
import { useNavigate } from 'react-router-dom';

function HackItUp() {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <div className="text-4xl font-bold mb-4">Hack - It - Up</div>
      <div
        onClick={() => navigate('/hackitup/registration')}
        className="cursor-pointer p-4 bg-blue-600 hover:bg-gray-300 rounded mb-2 text-xl"
      >
        Registration
      </div>
      <div
        onClick={() => navigate('/hackitup/submission')}
        className="cursor-pointer p-4 bg-blue-600 hover:bg-gray-300 rounded text-xl"
      >
        Submission
      </div>
    </div>
  );
}

export default HackItUp;