import React from 'react'
import './MainPage.css';
import Title from './Title'
import Round from '../Rounds/Round';
import Prize from '../prizes/Prize';
import Prizes from '../prizes/Prizes';

const MainPage = () => {
  return (
    <div className='MainPage'>
      <Title />
      <Round/>
      <Prizes/>
    </div>
  )
}

export default MainPage
