import React from 'react';
import DetailsLayout from './DetailsLayout';
import Logo from '../mentors/MSC_Logo.png';

function DataAnal_details () {

    const mentor01 =
        {
            image: Logo,
            name: 'Mentor 01',
            about: 'All the details about the mentors would be published here soon. Thank you for waiting. While you wait, it is advised to learn and explore as much as you can before the bootcamp starts so that you are up to date with the generic terms :)',
        }
    
    const mentor02 =
        {
            image: Logo,
            name: 'Mentor 02',
            about: 'All the details about the mentors would be published here soon. Thank you for waiting. While you wait, it is advised to learn and explore as much as you can before the bootcamp starts so that you are up to date with the generic terms :)',
        }

    const myTexts = [
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
                mentor2data={mentor02}
            />
        </div>
    );
}

export default DataAnal_details;