import React, {useState} from 'react';
import "./details.css";
import Teamleft from "../assets/Teamleft";
import Teamright from "../assets/Teamright";
import Logo from "./MSC_Logo.png";

function Webd_details () {

    const [isOpen, setIsOpen] = useState([false, false, false, false]);
    const loremTexts = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...'
    ];

    const toggleDropdown = (index) => {
        setIsOpen(isOpen.map((open, i) => (i === index ? !open : open)));
    };

    return (
        <div>
            <div className="domaintitle"><h1>&lt;Web Development/&gt;</h1></div>

            <div className="about">
                Craft stunning, responsive websites 
                from scratch with HTML, CSS, and JavaScript.
                Dive deep into frameworks like
                React and backend tech like Node.js!
                (do we create box shadow here like bootcamp header here?)
            </div>

            <div className="mentorsection">
                <div className="circlementor">
                    <h3>Web Development Mentors</h3>
                    <Teamleft image={Logo} name="Mentor 01" content="Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate"/>
                    <Teamright image={Logo} name="Mentor 02" content="Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate"/>
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
                            <p className="lorem-text">
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