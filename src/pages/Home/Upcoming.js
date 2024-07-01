import "./Upcoming.css";
import Hovercard from "./assets/Hovercard";

function Upcoming() {
  return (
    <>
      <div className="upcomingsection" data-aos="fade-up">
        <Hovercard
          img="https://res.cloudinary.com/duxmh9dws/image/upload/v1694947654/bootcamp_modal_cauj6h.jpg"
          content="The Summer Bootcamp aimed to empower participants with hands-on learning experiences in diverse domains, fostering skills in Web Development, App Development, AR/VR, AI/ML, Cybersecurity, Web3, Data Analytics and Product Management."
          name="Bootcamp '24"
        />
      </div>
    </>
  );
}
export default Upcoming;
