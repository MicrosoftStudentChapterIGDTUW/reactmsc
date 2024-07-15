import React from 'react';
import DetailsLayout from './DetailsLayout';
import Sanchay from '../mentors/Sanchay.png';

function Cyber_details () {

    const mentor01 =
        {
            image: Sanchay,
            name: 'Sanchay Singh',
            about: 'I am a Cybersecurity Expert, a Corporate Trainer and a Public Speaker. My main area of expertise lies in Reverse Engineering and hacking modern day video games. I am also the founder of Hackersvilla Community and have trained 500+ security enthusiasts till now.',
        }

    const myTexts = [
        'Intermediate Network Security',
        'Security Protocols and Encryption',
        'Threats and Vulnerabilities',
        'Web Application Security',
        'Incident Response and Forensics',
        'Capstone Project'
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
            />
        </div>
    );
      
}

export default Cyber_details;