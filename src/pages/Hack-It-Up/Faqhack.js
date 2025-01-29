import React from "react";

export default function Faqhack() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700">
        Frequently Asked Questions
      </h1>
      <div className="mx-auto max-w-4xl px-4">
        <div className="space-y-4">
          {/* Accordion Item 1 */}
          <div className="group bg-gradient-to-r from-sky-200 to-blue-900 text-white p-4 rounded-lg cursor-pointer">
            <h2 className="text-xl font-semibold">What is the MSC-IGDTUW Hackathon all about?</h2>
            <div className="group-hover:block hidden bg-gray-100 p-4 rounded-lg mt-2 text-black">
              The MSC-IGDTUW Hackathon is a platform for students to solve real-world problems, collaborate in teams, and showcase their innovative ideas while learning new skills and competing for exciting prizes.
            </div>
          </div>

          {/* Accordion Item 2 */}
          <div className="group bg-gradient-to-r from-sky-200 to-blue-900 text-white p-4 rounded-lg cursor-pointer">
            <h2 className="text-xl font-semibold">Who can participate in the hackathon?</h2>
            <div className="group-hover:block hidden bg-gray-100 p-4 rounded-lg mt-2 text-black">
              The hackathon is open to all students, irrespective of their technical expertise. Whether you’re a beginner or an experienced developer, you are welcome to participate.
            </div>
          </div>

          {/* Accordion Item 3 */}
          <div className="group bg-gradient-to-r from-sky-200 to-blue-900 text-white p-4 rounded-lg cursor-pointer">
            <h2 className="text-xl font-semibold">What are the themes for the hackathon?</h2>
            <div className="group-hover:block hidden bg-gray-100 p-4 rounded-lg mt-2 text-black">
              The hackathon features multiple themes, such as Sustainability, Healthcare, Artificial Intelligence, Cybersecurity, and Education Technology. Participants can choose a theme that interests them the most.
            </div>
          </div>

          {/* Accordion Item 4 */}
          <div className="group bg-gradient-to-r from-sky-200 to-blue-900 text-white p-4 rounded-lg cursor-pointer">
            <h2 className="text-xl font-semibold">What resources and tools will be provided during the hackathon?</h2>
            <div className="group-hover:block hidden bg-gray-100 p-4 rounded-lg mt-2 text-black">
              Participants will have access to free tools, resources, and mentorship from industry experts and Microsoft Learn Student Ambassadors to help them build their projects successfully.
            </div>
          </div>

          {/* Accordion Item 5 */}
          <div className="group bg-gradient-to-r from-sky-200 to-blue-900 text-white p-4 rounded-lg cursor-pointer">
            <h2 className="text-xl font-semibold">What are the prizes and perks for participants?</h2>
            <div className="group-hover:block hidden bg-gray-100 p-4 rounded-lg mt-2 text-black">
              Winners will receive exciting prizes, certificates, and goodies. All participants will get a participation certificate and the opportunity to network with peers and industry professionals.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
