import React from 'react';
import DetailsLayout from './DetailsLayout';
import Logo from '../mentors/MSC_Logo.png';

function Cyber_details () {

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
                domainName="Cyber Security"
                introText="This domain will cover the basics of cybersecurity,
                focusing on common threats and vulnerabilities.
                Participants will learn about network security,
                web application security (including the OWASP Top 10),
                and basic cryptography. The curriculum will also include
                ethical hacking, penetration testing techniques, and
                incident response strategies, ensuring participants 
                understand how to protect and secure systems effectively."
                mentor1data={mentor01}
                mentor2data={mentor02}
            />
        </div>
    );
      
}

export default Cyber_details;