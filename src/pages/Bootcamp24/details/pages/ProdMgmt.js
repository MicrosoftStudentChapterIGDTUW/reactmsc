import React from 'react';
import DetailsLayout from './DetailsLayout';
import Priyanshu from '../mentors/Priyanshu.jpg';

function ProdMgmt_details () {

    const mentor01 =
        {
            image: Priyanshu,
            name: 'Priyanshu',
            about: 'Hi, I\'m Priyanshu, a Product Manager focusing on Generative AI at Credgenics. I graduated in Information Technology from IIIT-Lucknow. My career so far has been a mix of exciting roles in product management, helping to create AI-driven products and improve business processes. I love building things and sharing my thoughts on LinkedIn, and I\'m always eager to learn from others in the tech community.',
        }

    const myTexts = [
        'Product Life Cycle & Design Thinking',
        'Behavioural Psychology for Design and Business',
        'Value Propositions and Prioritisation',
        'Pricing Frameworks',
        'Market Entry Frameworks',
        'User Acquisition'
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
            />
        </div>
    );

}

export default ProdMgmt_details;