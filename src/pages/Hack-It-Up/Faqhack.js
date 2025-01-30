import React, { useState } from "react";

export default function Faqhack() {
  // State to track which FAQ is open
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What is the MSC-IGDTUW Hackathon all about?",
      answer: "The MSC-IGDTUW Hackathon is a platform for students to solve real-world problems, collaborate in teams, and showcase their innovative ideas while learning new skills and competing for exciting prizes."
    },
    {
      question: "Who can participate in the hackathon?",
      answer: "The hackathon is open to all students, irrespective of their technical expertise. Whether you're a beginner or an experienced developer, you are welcome to participate."
    },
    {
      question: "What are the themes for the hackathon?",
      answer: "The hackathon features multiple themes, such as Sustainability, Healthcare, Artificial Intelligence, Cybersecurity, and Education Technology. Participants can choose a theme that interests them the most."
    },
    {
      question: "What resources and tools will be provided during the hackathon?",
      answer: "Participants will have access to free tools, resources, and mentorship from industry experts and Microsoft Learn Student Ambassadors to help them build their projects successfully."
    },
    {
      question: "What are the prizes and perks for participants?",
      answer: "Winners will receive exciting prizes, certificates, and goodies. All participants will get a participation certificate and the opportunity to network with peers and industry professionals."
    }
  ];

  return (
    <>
      <h1 className="mt-8 text-3xl md:text-5xl lg:text-[5em] text-center font-['Bebas_Neue'] text-[#012147]">
        Frequently Asked Questions
      </h1>
      <div className="mx-auto max-w-4xl px-4">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-[#1B2F4F] text-white p-4 rounded-lg cursor-pointer
                transition-all duration-300 ease-in-out hover:shadow-lg"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">{faq.question}</h2>
                <svg 
                  className={`w-6 h-6 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 9l-7 7-7-7" 
                  />
                </svg>
              </div>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden
                  ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="bg-gray-100 p-4 rounded-lg mt-2 text-black">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}