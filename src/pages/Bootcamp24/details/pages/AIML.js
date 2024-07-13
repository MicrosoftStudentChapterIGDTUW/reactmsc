import React from 'react';
import DetailsLayout from './DetailsLayout';
import Divyansh from '../mentors/Divyansh.jpg';
import Srishti from '../mentors/Srishti.jpg';

function AIML() {

    const mentor01 =
        {
            image: Divyansh,
            name: 'Divyansh Tuli',
            about: 'I am a B.Tech final year student at Delhi Technological University pursuing Electronics and Communication Engineering. I am currently working in the field of AI and Machine Learning, building LLM Agents and other tools for Business Automation.',
        }
    
    const mentor02 =
        {
            image: Srishti,
            name: 'Srishti',
            about: 'I am Srishti, an Undergraduate Student entering third year pursuing Information Technology from J.C. Bose University of Science and Technology YMCA Faridabad.\nI am on the journey of exploring Research in the field of AI/ML.\nCurrently I am working as an SDE intern at Amazon. Apart from Technical skills I love Dancing and Reading Astronomy books.\nAs a mentor in MSC cohort 2024, I am excited to share my knowledge with the mentees.',
        }

    const myTexts = [
        'To be released by the mentors soon',
        'To be released by the mentors soon',
        'To be released by the mentors soon',
        'To be released by the mentors soon',
        'To be released by the mentors soon',
        'To be released by the mentors soon',
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