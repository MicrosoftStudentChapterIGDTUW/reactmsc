import React, {useState} from 'react';
import "../layout/details.css";
import Teamleft from "../layout/Imageleft";
import Teamright from "../layout/Imageright";
import Logo from "../mentors/MSC_Logo.png";

function DataAnal_details () {

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
            <div className="domaintitle"><h1>Data Analytics</h1></div>

            <div className="about">
                Turn data into decisions!
                Clean, analyze, and visualize data
                with tools like Python and Tableau,
                transforming raw numbers into
                meaningful insights.
            </div>

            <div className="mentorsection">
                <div className="circlementor">
                    <h3>Data Analytics Mentors</h3>
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

export default DataAnal_details;