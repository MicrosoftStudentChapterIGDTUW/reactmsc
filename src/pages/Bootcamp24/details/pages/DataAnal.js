import React from 'react';
import DetailsLayout from './DetailsLayout';
import Yash from '../mentors/Yash.jpg';

function DataAnal_details () {

    const mentor01 =
        {
            image: Yash,
            name: 'Yash Kumar Goyal',
            about: 'I am Yash Kumar Goel, the Founder & CEO of Ambuvians Healthcare Private Limited and the Founder & President of the MLSA KIET chapter. With over 2 years of dedicated experience in Data Analytics and Business Intelligence, I have had the privilege of serving as a speaker at  global events. I have also taught over 1,000 students and manage a growing community of over 1K+ followers. In addition to my roles as a Subject Matter Expert, I am an active mentor and judge, committed to fostering innovation and excellence in the field.',
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
                domainName="Data Analytics"
                introText="Participants will delve into the world of data analytics,
                beginning with an introduction to data collection and cleaning
                techniques. They will learn how to use popular tools like Excel,
                SQL, and Python libraries (Pandas, NumPy) to manipulate and
                analyze data. The curriculum will include data visualization
                with tools such as Tableau, Power BI, and Matplotlib, helping
                participants turn raw data into meaningful insights. Additionally,
                the bootcamp will cover statistical analysis, exploratory data
                analysis (EDA), and an introduction to machine learning concepts.
                Participants will also explore best practices for data storytelling
                and presenting their findings effectively."
                mentor1data={mentor01}
            />
        </div>
    );
}

export default DataAnal_details;