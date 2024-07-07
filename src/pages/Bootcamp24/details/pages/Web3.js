import React, {useState} from 'react';
import "../layout/details.css";
import Teamleft from "../layout/Imageleft";
import Teamright from "../layout/Imageright";
import Logo from "../mentors/MSC_Logo.png";

function Web3_details () {

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
            <div className="domaintitle"><h1>Web3</h1></div>

            <div className="about">
                Participants will explore blockchain technology
                and its applications, starting with the basics of 
                smart contracts. They will learn to develop on platforms
                like Ethereum using Solidity, and build decentralized
                applications (dApps). The bootcamp will cover using
                development frameworks like Truffle and Hardhat,
                integrating with Web3.js, and understanding security
                considerations in blockchain development.
            </div>

            <div className="mentorsection">
                <div className="circlementor">
                    <h3>Web3 Mentors</h3>
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

export default Web3_details;