import React from 'react';
import DetailsLayout from './DetailsLayout';
import Logo from '../mentors/MSC_Logo.png';

function ARVR_details () {

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
                domainName="AR / VR"
                introText="This domain will introduce participants to augmented reality
                (AR) and virtual reality (VR) technologies. They will learn
                to use tools like Unity or Unreal Engine for creating immersive
                experiences. Topics include building 3D models and environments,
                scripting with C# or Blueprints, and handling user interactions
                in AR/VR settings. Participants will also learn about testing
                and deploying AR/VR applications."
                mentor1data={mentor01}
                mentor2data={mentor02}
            />
        </div>
    );
}

export default ARVR_details;