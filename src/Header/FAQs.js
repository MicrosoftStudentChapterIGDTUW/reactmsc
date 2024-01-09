import React from 'react';
import './FAQs.css'; 

import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";

export default function FAQs() {
  return (
    <>
    <h1 className="divider line glow" contenteditable>Frequently Asked Questions</h1>
    <MDBContainer className="mt-5" style={{maxWidth: '1300px'}}>
      <MDBAccordion alwaysOpen initialActive={1}>
        <MDBAccordionItem collapseId={1} headerTitle="What is MSC-IGDTUW all about?" >
        MSC IGDTUW, a technical club under the wing of Microsoft Learn Student Ambassador, is a great platform for students to come together to learn about the new technologies, network with their peers, nurture their skills and foster a sense of student community.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="What prompts for MSC?">
        MSC-IGDTUW believes that the right guidance can help you achieve ultimate success. We promise to nurture you throughout your journey and you wil not miss any opportunity if you are with us.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="What will MSC provide?">
        The club aims at providing the best resources and tools to learn and grow by organizing informative webinars, seminars, technical hackathons and ideathons.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={4} headerTitle="What does MSC have in stack for us?">
        MSC IGDTUW offers many special perks for all the members such as access to all the meet and sessions and access to exclusive Microsoft supported events and resources. MSC IGDTUW is the right place for students who have a passion for technology and a desire to share and learn.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={5} headerTitle="What's so special about MSC?">
        Reskill in collaboration with Azure Developer Community supported by Microsoft Azure organizes some special events exclusively for MSC members wherein one gets to network with peers along with having great learning sessions at Microsoft office, Gurugram.
        </MDBAccordionItem>
      </MDBAccordion>
    </MDBContainer>
    </>
  );
}
