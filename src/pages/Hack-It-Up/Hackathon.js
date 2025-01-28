import React from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import TeamRegistrationForm from "./RegistrationForm";
import HackathonSubmission from "./SubmissionForm";
import Timeline from "./timeline/Timeline";
import Judges from "./Judges/Judges";
import Mentors from "./Judges/Mentors";

function HackItUp() {
  const navigate = useNavigate();

  return (
    <>
      <div className="">
        <div>
          <img
            src="./images/HACK-IT-UP.jpg"
            alt="mobile version"
            className="absolute md:hidden" // hidden on medium screens and up, visible below
          />

          {/* Visible on larger screens, hidden on mobile */}
          <img
            src="./images/HACK_IT_UP.jpg"
            alt="desktop version"
            className="block" // visible on medium screens and up, hidden below
          />
        </div>

        <div
          onClick={() => navigate("/hackitup/registration")}
          className="absolute w-52 cursor-pointer p-2 bg-blue-600 hover:bg-gray-300 rounded my-4 text-xl text-white mx-auto flex justify-center items-center"
        >
          Register Now!
        </div>

        {/* <div
        onClick={() => navigate('/hackitup/submission')}
        className="cursor-pointer p-4 bg-blue-600 hover:bg-gray-300 rounded text-xl"
      >
        Submission
      </div>*/}
      </div>

      {/* <Mentors/> */}
      <Timeline />
      <Judges />
    </>
  );
}

export default HackItUp;
