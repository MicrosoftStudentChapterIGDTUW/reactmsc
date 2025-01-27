import TeamRegistrationForm from "./RegistrationForm";
import HackathonSubmission from "./SubmissionForm";
import Timeline from "./timeline/Timeline";



function HackItUp() {
  return (
    <>
      <div>Hello</div>
      <button>registration</button>
      <TeamRegistrationForm />
      <button>submission</button>
      <HackathonSubmission />

      <Timeline />
    </>
  );
}

export default HackItUp;
