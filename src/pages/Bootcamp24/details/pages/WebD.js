import React from 'react';
import DetailsLayout from './DetailsLayout';
import Logo from '../mentors/MSC_Logo.png';

function Webd_details () {

    const mentor01 =
        {
            image: Logo,
            name: 'Mentor 01',
            about: 'All the details about the mentors would be published here soon. Thank you for waiting. While you wait, it is advised to learn and explore as much as you can before the bootcamp starts so that you are up to date with the generic terms :)',
        }
    
    const mentor02 =
        {
            image: Logo,
            name: 'Mentor 02',
            about: 'All the details about the mentors would be published here soon. Thank you for waiting. While you wait, it is advised to learn and explore as much as you can before the bootcamp starts so that you are up to date with the generic terms :)',
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