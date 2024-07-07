import React from 'react';
import DetailsLayout from './DetailsLayout';
import Logo from '../mentors/MSC_Logo.png';

function ProdMgmt_details () {

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
        'To be released by the mentors soon',
        'To be released by the mentors soon',
        'To be released by the mentors soon'
    ];

    return (
        <div>
            <DetailsLayout
                content={myTexts}
                domainName="Product Management"
                introText="The focus will be on the fundamentals of product
                management, including market research, user needs
                assessment, and product lifecycle planning. Participants
                will learn about Agile and Scrum methodologies, how to
                write product requirements and user stories, and the
                principles of user experience (UX) design. The curriculum
                will also cover product analytics, key performance indicators
                (KPIs), and how to strategically manage and develop products
                from concept to launch."
                mentor1data={mentor01}
                mentor2data={mentor02}
            />
        </div>
    );

}

export default ProdMgmt_details;