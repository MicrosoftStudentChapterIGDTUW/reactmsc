import React from 'react';
import DetailsLayout from './DetailsLayout';
import Chaitanya from '../mentors/Chaitanya.jpg';
import Saksham from '../mentors/Saksham.png';

function Webd_details () {

    const mentor01 =
        {
            image: Chaitanya,
            name: 'Chaitanya Anand',
            about: 'I am a creative web developer specializing in React, and Next, with a knack for quickly mastering new technologies. My interest in Generative AI, and Cybersecurity adds a unique perspective, and I thrive in fostering innovation and collaboration within teams.\n"Everyone faces the empty endless road that seems boundless. He who starts walking without looking back succeeds"',
        }
    
    const mentor02 =
        {
            image: Saksham,
            name: 'Saksham Gambhir',
            about: 'Hello! I\'m Saksham Gambhir, a passionate full stack developer specializing in the MERN stack. I create intuitive, responsive web applications using technologies like React, TailwindCSS, and NodeJS. With a strong foundation in HTML, CSS, JavaScript and MongoDB, I excel in both frontend and backend development. I am currently pursuing a degree in Electronics and Communication Engineering at Delhi Technological University. My projects showcase my ability to blend technical skills with creative design, delivering effective and engaging digital solutions.',
        }

    const myTexts = [
        'To be released by the mentors soon',
        'To be released by the mentors soon',
        'To be released by the mentors soon',
        'To be released by the mentors soon',
        'To be released by the mentors soon',
        'To be released by the mentors soon'
    ];

    return (
        <div>
            <DetailsLayout
                content={myTexts}
                domainName="Web Development"
                introText="Participants will start with the basics of HTML, CSS,
            and JavaScript, learning how to build and style web
            pages. They will explore responsive design using CSS
            frameworks like Bootstrap, and advance to JavaScript
            libraries and frameworks such as React or Vue.js.
            Backend development will include Node.js and Express,
            along with database management using MongoDB or SQL.
            The bootcamp will also cover creating RESTful APIs,
            using version control with Git/GitHub, and deploying
            web applications with platforms like Heroku or Netlify."
                mentor1data={mentor01}
                mentor2data={mentor02}
            />
        </div>
    );
}

export default Webd_details;