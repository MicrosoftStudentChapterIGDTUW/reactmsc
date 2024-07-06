import React from 'react';
import DetailsLayout from './DetailsLayout';
import Logo from '../mentors/MSC_Logo.png';

function AIML() {

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
                domainName="AI / ML"
                introText="Participants will explore the fundamentals of
                artificial intelligence and machine learning, starting with
                Python programming for data science, using libraries like Pandas
                and NumPy. The curriculum includes data visualization with
                Matplotlib and Seaborn, understanding supervised and unsupervised
                learning algorithms, and evaluating and tuning models. The
                bootcamp will also introduce deep learning with frameworks such
                as TensorFlow and Keras, along with practical experience working
                with datasets."
                mentor1data={mentor01}
                mentor2data={mentor02}
            />
        </div>
    );
}

export default AIML;