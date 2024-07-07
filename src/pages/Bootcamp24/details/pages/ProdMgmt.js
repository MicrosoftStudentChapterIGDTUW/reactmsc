import React, {useState} from 'react';
import "../layout/details.css";
import Teamleft from "../layout/Imageleft";
import Teamright from "../layout/Imageright";
import Logo from "../mentors/MSC_Logo.png";

function ProdMgmt_details () {

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
            <div className="domaintitle"><h1>Product Management</h1></div>

            <div className="about">
                The focus will be on the fundamentals of product
                management, including market research, user needs
                assessment, and product lifecycle planning. Participants
                will learn about Agile and Scrum methodologies, how to
                write product requirements and user stories, and the
                principles of user experience (UX) design. The curriculum
                will also cover product analytics, key performance indicators
                (KPIs), and how to strategically manage and develop products
                from concept to launch.
            </div>

            <div className="mentorsection">
                <div className="circlementor">
                    <h3>Product Management Mentors</h3>
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

export default ProdMgmt_details;