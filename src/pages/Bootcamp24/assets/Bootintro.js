import React from 'react';
import banner from '../details/mentors/banner.jpg';

function Bootintro() {
    return (
        <div className="bootintro" data-aos="fade-up">
            <img src={banner} className="w-3/4 h-1/2 mx-auto" alt="Cohort Banner"/>
            <div className="bootabout w-90 mx-auto mt-8 p-10 bg-white text-blue-800 rounded-lg font-medium text-justify">
                <div className="intro-text">
                    Following the success of the 2023 summer bootcamp,
                    MSC IGDTUW plans to conduct a revamped edition of
                    this event. The Summer Bootcamp aims to empower
                    participants with hands-on learning experiences in
                    diverse domains, including Web Development,
                    App Development, AR/VR, AI/ML, Cybersecurity, Web3, Data Analytics,
                    and Product Management.
                </div>
                <h2 className="mt-20 text-center text-3xl">Outline</h2>
                <ol className="list-decimal pl-6 mt-4">
                    <li>Registration period for mentors</li>
                    <li>Finalization of mentors</li>
                    <li>Registration period for mentees</li>
                    <li>Online Assessment</li>
                    <li>Announcement of mentors</li>
                    <li>Announcement of shortlisted mentees</li>
                    <li>Bootcamp begins</li>
                    <li>Minor Project</li>
                    <li>Major Project</li>
                    <li>Bootcamp concludes</li>
                    <li>Prize and honor roll</li>
                </ol>
            </div>
        </div>
    );
}

export default Bootintro;