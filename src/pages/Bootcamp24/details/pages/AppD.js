import React from 'react';
import DetailsLayout from './DetailsLayout';
import Sagar from '../mentors/Sagar.jpg';

function Appd_details () {
    const mentor01 =
        {
            image: Sagar,
            name: 'Sagar Wadhwa',
            about: 'An enthusiastic learner with a passion for technology, having a solid foundation in programming and a keen interest in the latest trends and innovations. Dedicated to continuous learning and growth, always seeking new challenges to expand skills and knowledge.',
        }

    const myTexts = [
        'Introduction to Flutter and some basc concepts',
        'Basics of Dart, Flutter widgets hands-on',
        'Creating login page, Navigating through different pages ',
        'Quiz, Hands-on for Stateful Widget in Flutter',
        'TextFormField validation, Firebase integration',
        'Network/API calls, Quiz, List View in Flutter'
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
            />
        </div>
    );
}

export default Appd_details;