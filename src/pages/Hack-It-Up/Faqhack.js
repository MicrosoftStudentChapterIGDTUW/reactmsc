import React from 'react';
import './Faqhack.css'; 

import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";

export default function Faqhack() {
  return (
    <>
      <h1 className="divider line glow" contenteditable>Frequently Asked Questions</h1>
      <MDBContainer className="mt-5" style={{ maxWidth: '1300px' }}>
        <MDBAccordion alwaysOpen initialActive={1}>
          <MDBAccordionItem collapseId={1} headerTitle="What is the MSC-IGDTUW Hackathon all about?">
            The MSC-IGDTUW Hackathon is a platform for students to solve real-world problems, collaborate in teams, and showcase their innovative ideas while learning new skills and competing for exciting prizes.
          </MDBAccordionItem>
          <MDBAccordionItem collapseId={2} headerTitle="Who can participate in the hackathon?">
            The hackathon is open to all students, irrespective of their technical expertise. Whether you’re a beginner or an experienced developer, you are welcome to participate.
          </MDBAccordionItem>
          <MDBAccordionItem collapseId={3} headerTitle="What are the themes for the hackathon?">
            The hackathon features multiple themes, such as Sustainability, Healthcare, Artificial Intelligence, Cybersecurity, and Education Technology. Participants can choose a theme that interests them the most.
          </MDBAccordionItem>
          <MDBAccordionItem collapseId={4} headerTitle="What resources and tools will be provided during the hackathon?">
            Participants will have access to free tools, resources, and mentorship from industry experts and Microsoft Learn Student Ambassadors to help them build their projects successfully.
          </MDBAccordionItem>
          <MDBAccordionItem collapseId={5} headerTitle="What are the prizes and perks for participants?">
            Winners will receive exciting prizes, certificates, and goodies. All participants will get a participation certificate and the opportunity to network with peers and industry professionals.
          </MDBAccordionItem>
        </MDBAccordion>
      </MDBContainer>
    </>
  );
}
