import React from 'react';
import DetailsLayout from './DetailsLayout';
import Harsh from '../mentors/Harsh.png';

function ARVR_details () {

    const mentor01 =
        {
            image: Harsh,
            name: 'Harsh Verma',
            about: 'I am Harsh Verma, a second-year student at KIET Group of Institutions, Ghaziabad, with over a year of experience in AR/VR development. I am an ex-intern at Holokitab and currently working with a Canadian startup called OOAI as an AR developer.',
        }

    const myTexts = [
        'Introduction and Basics',
        'Deep Dive into AR',
        'AR Flashcards',
        'AR Business Card Project',
        'Final Projects and Presentations',
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
            />
        </div>
    );
}

export default ARVR_details;