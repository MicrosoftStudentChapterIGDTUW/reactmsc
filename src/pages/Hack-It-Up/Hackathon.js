// import { Link } from "react-router-dom";
import TeamRegistrationForm from "./RegistrationForm";
import HackathonSubmission from "./SubmissionForm";
import RoundsComponent from "./Rounds";


function HackItUp() {
  return (
    <>
      <div>Hello</div>
      <RoundsComponent/>
      <button>registration</button>
      <TeamRegistrationForm/>
      <button>submission</button>
      <HackathonSubmission/>
    </>
  );
}
export default HackItUp;
