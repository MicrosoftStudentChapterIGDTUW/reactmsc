// import { Link } from "react-router-dom";
import React from 'react'
import TeamRegistrationForm from "./RegistrationForm";
import HackathonSubmission from "./SubmissionForm";

function HackItUp() {
  return (
    <>
      <div>Hello</div>
      <button>registration</button>
      <TeamRegistrationForm/>
      <button>submission</button>
      <HackathonSubmission/>
    </>
  );
}
export default HackItUp;
