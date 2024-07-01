import React, {useState} from 'react';
import "../layout/details.css";
import Teamleft from "../layout/Imageleft";
import Teamright from "../layout/Imageright";
import Logo from "../mentors/MSC_Logo.png";

function Webd_details () {

    const [isOpen, setIsOpen] = useState([false, false, false, false]);
    const loremTexts = [
        'To be released by the mentors soon',
        'To be released by the mentors soon',
        'To be released by the mentors soon',
        'To be released by the mentors soon'
    ];

    const toggleDropdown = (index) => {
        setIsOpen(isOpen.map((open, i) => (i === index ? !open : open)));
    };
      

    return (
        <div>
            <div className="domaintitle"><h1>&lt;Web Development/&gt;</h1></div>

            <div className="about">
            Participants will start with the basics of HTML, CSS,
            and JavaScript, learning how to build and style web
            pages. They will explore responsive design using CSS
            frameworks like Bootstrap, and advance to JavaScript
            libraries and frameworks such as React or Vue.js.
            Backend development will include Node.js and Express,
            along with database management using MongoDB or SQL.
            The bootcamp will also cover creating RESTful APIs,
            using version control with Git/GitHub, and deploying
            web applications with platforms like Heroku or Netlify.
            </div>

            <div className="mentorsection">
                <div className="circlementor">
                    <h3>Web Development Mentors</h3>
                    <Teamleft image={Logo} name="Mentor 01"
                        content="All the details about the mentors would be published here soon.
                        Thank you for waiting. While you wait, it is advised to learn and explore as much as you can before the bootcamp starts so that you are up to date with the generic terms :)"
                    />
                    <Teamright image={Logo} name="Mentor 02"
                        content="All the details about the mentors would be published here soon.
                        Thank you for waiting. While you wait, it is advised to learn and explore as much as you can before the bootcamp starts so that you are up to date with the generic terms :)"
                    />
                </div>
            </div>

            <div className="timeline-container">
                <h2>Timeline</h2>
                {loremTexts.map((text, index) => (
                    <div key={index} className="dropdown">
                        <button onClick={() => toggleDropdown(index)}>
                            Week {index + 1}
                            <span className={`arrow ${isOpen[index] ? 'up' : ''}`}></span>
                        </button>
                        {isOpen[index] && (
                            <p className={`lorem-text ${isOpen[index] ? 'open' : ''}`}>
                                {text}
                            </p>
                        )}

                    </div>
                ))}
            </div>

        </div>
    )
}

export default Webd_details;