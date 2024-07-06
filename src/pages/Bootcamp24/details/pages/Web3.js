import React from 'react';
import DetailsLayout from './DetailsLayout';
import Logo from '../mentors/MSC_Logo.png';

function Web3_details () {

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
                domainName="Web3"
                introText="Participants will explore blockchain technology
                and its applications, starting with the basics of 
                smart contracts. They will learn to develop on platforms
                like Ethereum using Solidity, and build decentralized
                applications (dApps). The bootcamp will cover using
                development frameworks like Truffle and Hardhat,
                integrating with Web3.js, and understanding security
                considerations in blockchain development."
                mentor1data={mentor01}
                mentor2data={mentor02}
            />
        </div>
    );
}

export default Web3_details;