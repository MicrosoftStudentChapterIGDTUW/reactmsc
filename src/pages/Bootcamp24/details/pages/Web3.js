import React from 'react';
import DetailsLayout from './DetailsLayout';
import Prakhar from '../mentors/Prakhar.jpg';

function Web3_details () {

    const mentor01 =
        {
            image: Prakhar,
            name: 'Prakhar Tripathi',
            about: 'I\'m Prakhar Tripathi, An engineer who knows how to build a Product.\nCurrently building Fixtix.uk as Head of Technology.\nHaving an experience of working with 7+ startups helped me gain technical expertise in Smart Contracts, Full Stack and a good grasp of Generative AI which makes me able to design solutions as best market fit.',
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
            />
        </div>
    );
}

export default Web3_details;