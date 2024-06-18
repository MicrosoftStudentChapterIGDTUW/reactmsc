import { Link } from "react-router-dom";
import "./Bootcamp.css";
import Teamleft from "./assets/Teamleft";
import Teamright from "./assets/Teamright";
import Bootintro from "./assets/Bootintro";
import WebD from "./details/Webd";

function Bootcamp24() {
  return (
    <>
      <div className="boot">
        <Bootintro />
      </div>

      <div className="mentorsection">
        <h3>DOMAINS</h3>
        <div className="left">
          <Link to="/webd">
             <Teamleft name="WEB DEVELOPMENT" />{" "}
          </Link>
          
          <Teamleft name="APP DEVELOPMENT" />
          <Teamleft name="AR / VR" />
        </div>
        <div className="right">
          <Teamright name="AI / ML" />
          <Teamright name="CYBERSECURITY" />
          <Teamright name="WEB3" />
        </div>{" "}
        <div className="bottom">
          <Teamleft name="PRODUCT MANAGEMENT" />{" "}
          <Teamleft name="DATA ANALYTICS" />
        </div>
      </div>
    </>
  );
}
export default Bootcamp24;
