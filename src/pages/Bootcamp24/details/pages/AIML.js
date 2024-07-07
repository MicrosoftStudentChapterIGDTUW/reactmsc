import React, {useState} from 'react';
import "../layout/details.css";
import Teamleft from "../layout/Imageleft";
import Teamright from "../layout/Imageright";
import Logo from "../mentors/MSC_Logo.png";

function AIML_details () {

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
            <div className="domaintitle"><h1>AI / ML</h1></div>

            <div className="about">
                Participants will delve into the fundamentals of
                artificial intelligence and machine learning,
                starting with Python programming for data science,
                using libraries like Pandas and NumPy. The curriculum
                includes data visualization with Matplotlib and Seaborn,
                understanding supervised and unsupervised learning
                algorithms, and evaluating and tuning models.
                The bootcamp will also introduce deep learning with
                frameworks such as TensorFlow and Keras, along with
                practical experience working with datasets.
            </div>

            <div className="mentorsection">
                <div className="circlementor">
                    <h3>AI/ML Mentors</h3>
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

export default AIML_details;