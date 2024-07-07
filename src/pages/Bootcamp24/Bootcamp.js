import { Link } from "react-router-dom";
import "./Bootcamp.css";
import Teamleft from "./assets/Teamleft";
import Teamright from "./assets/Teamright";
import Bootintro from "./assets/Bootintro";
import Bootdetails from './assets/Bootdetails';
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

          <Link to="/bootcamp24/webd">
            <Teamleft name="Web Development" 
            details="Craft stunning, responsive websites
            from scratchwith HTML, CSS, and JavaScript.
            Dive deep into frameworks like React and
            backend tech like Node.js!"/>{" "}
          </Link>

          <Link to="/bootcamp24/appd">
            <Teamleft name="App Development"
            details="Build sleek mobile apps with Android
            or iOS, and master cross-platform tools
            like Flutter. Create, test, and optimize
            your app for any device!"/>
          </Link>

          <Link to="/bootcamp24/arvr">
            <Teamleft name="AR / VR"
            details="Step into the future with AR/VR!
            Create immersive 3D worlds using Unity
            or Unreal Engine, and script interactive
            experiences with ease."/>
          </Link>

        </div>
        <div className="right">

          <Link to="/bootcamp24/aiml">
            <Teamright name="AI / ML"
            details="Unlock the power of AI!
            Learn Python for data science,
            explore machine learning algorithms,
            and dive into deep learning with TensorFlow."/>
          </Link>

          <Link to="/bootcamp24/cyber">
            <Teamright name="Cyber Security"
            details="Become a digital defender!
            Learn to identify vulnerabilities,
            understand ethical hacking, and
            secure systems against cyber threats."/>
          </Link>

          <Link to="/bootcamp24/web3">
            <Teamright name="Web3"
            details="Join the blockchain revolution!
            Develop smart contracts and decentralized
            apps on Ethereum, and master Web3.js 
            for secure, innovative solutions."/>
          </Link>

        </div>{" "}
        <div className="bottom">

          <Link to="/bootcamp24/prodmgmt">
            <Teamleft name="Product Management"
            details="Shape the next big thing!
            From market research to launch,
            learn Agile methods, user experience design,
            and strategic product development."/>{" "}
          </Link>

          <Link to="/bootcamp24/dataanal">
            <Teamleft name="Data Analytics"
            details="Turn data into decisions!
            Clean, analyze, and visualize data
            with tools like Python and Tableau,
            transforming raw numbers into meaningful insights."/>
          </Link>

        </div>
      </div>

      <div className="boot">
        <Bootdetails/>
      </div>
    </>
  );
}
export default Bootcamp24;
