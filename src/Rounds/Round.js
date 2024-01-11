import React from 'react'
import Hovercard from '../Home/assets/Hovercard'
import r1 from '../images/r1.png'
import r2 from '../images/r2.png'
import r3 from '../images/r3.png'
import './round.css'
function Round() {
  return (
    <>
    <div className="prizes_head">
          <h4 className='prizeheading'>ROUNDS</h4> 
          <h4 className='prizeheading'>ROUNDS</h4> 
          <h4 className='prizeheading'>ROUNDS</h4> 
       </div>
    <div className="upcomingsection" data-aos="fade-up">
    <Hovercard img={r1} content="Episode 1: In this captivating episode of our Insider Series, we delved into the world of the Flipkart GRiD Hackathon with the amazing Ms. Pooja Gera. She shared her remarkable journey and winning strategies to ace hackathons and her experience that led to triumph." name="Binary Rush"/>
    <Hovercard img={r2} content="Episode 2: The second episode of the Insider Series was an inspiring session with the talented Ms. Bhawna, one of the MLH Fellowship Top 50 achievers. She shared her exceptional journey and insights, motivating our audience to excel in the dynamic realm of tech." name="Morph"/>
    <Hovercard img={r3} content="Episode 3: In our illuminating session, we delved into the art of cracking FAANG companies—those tech giants everyone aspires to join. From crafting standout resumes to acing technical interviews, we dissected strategies and shared insider tips to help attendees land coveted positions at FAANG." name="Blitz"/>
    </div>
    </>
  )
}

export default Round