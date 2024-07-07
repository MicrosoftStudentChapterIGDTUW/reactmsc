import { Link } from "react-router-dom";
import "./Bootcamp.css";
import Teamleft from "./assets/Teamleft";
import Teamright from "./assets/Teamright";
import Bootintro from "./assets/Bootintro";
import CallForMenteesButton from "./assets/CallMenteesBtn";

function Bootcamp24() {
  return (
    <>
      <div className="boot">
        <Bootintro />
      </div>

      <CallForMenteesButton />

      <div className="domainsection">
        <h3>DOMAINS</h3>
        <div className="left">
          <Link to="/webd">
            <Teamleft name="WEB DEVELOPMENT" />{" "}
          </Link>
          <Link to="/appd">
            <Teamleft name="APP DEVELOPMENT" />
          </Link>
          <Link to="/arvr">
            <Teamleft name="AR / VR" />
          </Link>
        </div>
        <div className="right">
          <Link to="/aiml">
            <Teamright name="AI / ML" />
          </Link>
          <Link to="/cyber">
            <Teamright name="CYBER SECURITY" />
          </Link>
          <Link to="/web3">
            <Teamright name="WEB3" />
          </Link>
        </div>{" "}
        <div className="bottom">
          <Link to="/prodmgmt">
            <Teamleft name="PRODUCT MANAGEMENT" />{" "}
          </Link>
          <Link to="/dataanal">
            <Teamleft name="DATA ANALYTICS" />
          </Link>
        </div>
      </div>
    </>
  );
}
export default Bootcamp24;
