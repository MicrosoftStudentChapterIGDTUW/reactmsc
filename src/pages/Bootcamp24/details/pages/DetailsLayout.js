import React, { useState } from 'react';

function DetailsLayout({ content, domainName, introText, mentor1data, mentor2data }) {
    const [isOpen, setIsOpen] = useState([false, false, false, false]);
    const toggleDropdown = (index) => {
        setIsOpen(isOpen.map((open, i) => (i === index ? !open : open)));
    };

    return (
        <div>
            <div className="domaintitle flex justify-center items-center bg-blue-600 w-[90vw] my-[5vh] mx-[5vw] text-[1.5rem] rounded-[20px]">
                <h1 className="text-white text-[calc(1.2rem + 3vw)]">{domainName}</h1>
            </div>

            <div className="about w-[90vw] mx-auto my-[2rem] p-[1rem] bg-white text-blue-900 rounded-[20px] font-medium text-justify shadow-[0_0_20px_1px_rgba(0,0,0,0.1)]">
                {introText}
            </div>

            <div className="mentorsection mb-[10vh]">
                <div className="w-[90vw] mx-auto shadow-[0_0_20px_1px_rgba(0,0,0,0.1)] text-center p-[2rem] mt-[1rem] rounded-[20px]">
                    <h3 className='text-3xl mb-4'>{domainName} Mentors</h3>

                    <div className="imageleft grid-cols-1 justify-evenly screens-lg:grid-cols-2" data-aos="flip-up" data-aos-duration="1000">
                        <img src={mentor1data.image} className="w-[10rem] h-[10rem] rounded-full inline-block align-middle" alt="Mentor Avatar" />
                        <div className="bg-logo-darkBlue2 rounded-lg inline-block p-3 text-white align-middle m-1">
                            <span className="text-blue-400 text-lg">{mentor1data.name}<br /></span>
                            <span className="text-100">{mentor1data.about}</span>
                        </div>
                    </div>

                    {mentor2data ? (
                        <div className="imageright" data-aos="flip-up" data-aos-duration="1000">
                            <div className="teamachievement w-60vw h-10rem bg-blue-900 rounded-lg inline-block p-4 text-white mr-2 mt-1">
                                <span className="text-blue-400 text-lg">{mentor2data.name}<br /></span>
                                {mentor2data.about}
                            </div>
                            <img src={mentor2data.image} className="w-[8rem] h-[8rem] rounded-full inline-block ml-3 mt-3" alt="Mentor Avatar" />
                        </div>
                    ) : null}

                </div>
            </div>

            <div className="timeline-container py-0">
                <div className="box w-[90vw] mx-auto shadow-[0_0_20px_1px_rgba(0,0,0,0.1)] text-center py-[2rem] mt-[1rem] bg-blue-600 rounded-[20px]">
                    <h2 className="text-center text-white text-2xl mb-[2vh]">Timeline</h2>
                    {content.map((text, index) => (
                        <div key={index} className="dropdown">
                            <button
                                onClick={() => toggleDropdown(index)}
                                className="w-[95%] p-[10px] bg-blue-900 text-white border-none cursor-pointer relative rounded-[10px] transition-bg duration-300 ease-in-out"
                            >
                                Week {index + 1}
                                <span className={`arrow ${isOpen[index] ? 'up' : ''} border border-white border-[0_3px_3px_0] inline-block p-[3px] rotate-45 absolute right-[20px] top-[40%] self-center transition-transform duration-300 ease-in-out`}></span>
                            </button>
                            {isOpen[index] && (
                                <p className={`lorem-text ${isOpen[index] ? 'open' : ''} p-[10px] text-white opacity-100 h-5 transition-opacity duration-300 ease-in-out transition-visibility duration-300 ease-in-out transition-max-height duration-300 ease-in-out data-aos="flip-up" data-aos-duration="500"` }>
                                    {text}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DetailsLayout;