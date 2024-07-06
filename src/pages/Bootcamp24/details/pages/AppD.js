import React from 'react';
import DetailsLayout from './DetailsLayout';
import Logo from '../mentors/MSC_Logo.png';

function Appd_details () {
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
                domainName="App Development"
                introText="The focus will be on mobile app development,
                starting with an introduction to either Android
                (Java/Kotlin) or iOS (Swift) development. Participants
                may also learn cross-platform development using tools
                like Flutter or React Native. Key topics include UI/UX
                design principles, state management, local storage,
                and API integration. The bootcamp will also cover testing,
                debugging, and optimizing mobile apps."
                mentor1data={mentor01}
                mentor2data={mentor02}
            />
        </div>
    );
}

export default Appd_details;