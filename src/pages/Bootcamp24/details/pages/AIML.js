import React, {useState} from 'react';
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
            <div className="domaintitle flex justify-center items-center bg-blue-600 w-[90vw] my-[5vh] mx-[5vw] text-[1.5rem] rounded-[20px]">
                <h1 className="text-blue-800 text-[calc(1.2rem + 3vw)]">AI / ML</h1>
            </div>

            <div className="about w-[90vw] mx-auto my-[2rem] p-[1rem] bg-white text-blue-900 rounded-[20px] font-medium">
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

            <div className="mentorsection mb-[10vh]">
                <div className="circlementor w-[90vw] mx-auto shadow-[0_0_20px_1px_rgba(0,0,0,0.1)] text-center py-[2rem] mt-[1rem] rounded-[20px]">
                    <h3 className='text-3xl'>AI/ML Mentors</h3>
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

            <div className="timeline-container py-0" data-aos="flip-up" data-aos-duration="500">
                <div className="box w-[90vw] mx-auto shadow-[0_0_20px_1px_rgba(0,0,0,0.1)] text-center py-[2rem] mt-[1rem] bg-blue-600 rounded-[20px]">
                    <h2 className="text-center text-white text-2xl mb-[2vh]">Timeline</h2>
                    {loremTexts.map((text, index) => (
                        <div key={index} className="dropdown">
                            <button
                                onClick={() => toggleDropdown(index)}
                                className="w-[95%] p-[10px] bg-blue-900 text-white border-none cursor-pointer relative rounded-[10px] transition-bg duration-300 ease-in-out"
                            >
                                Week {index + 1}
                                <span className={`arrow ${isOpen[index] ? 'up' : ''} 
                                    border border-white border-[0_3px_3px_0] inline-block p-[3px] rotate-45 absolute right-[20px] top-[40%] self-center transition-transform duration-300 ease-in-out`}></span>
                            </button>
                            {isOpen[index] && (
                                <p className={`lorem-text ${isOpen[index] ? 'open' : ''}
                                    p-[10px] text-white opacity-100 h-5 transition-opacity duration-300 ease-in-out transition-visibility duration-300 ease-in-out transition-max-height duration-300 ease-in-out data-aos="flip-up" data-aos-duration="500"` }>
                                    {text}
                                </p>
                            )}

                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default AIML_details;