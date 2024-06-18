import React from 'react';

import Title from './Title';
import Round from '../Rounds/Round';
import Prizes from '../prizes/Prizes';

const MainPage = () => {
  // Define the styles as a JavaScript object
  const mainPageStyle = {
    backgroundImage: 'url("/images/bg-1.jpg")',
    backgroundSize: 'cover',
    overflow: 'hidden',
    height: '100vh', // Set height or other necessary styles
  };

  return (
    <div style={mainPageStyle}>
      <Title />
      <Round />
      <Prizes />
    </div>
  );
};

export default MainPage;
