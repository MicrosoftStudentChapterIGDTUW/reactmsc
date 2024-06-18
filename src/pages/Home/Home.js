import "./Home.css";
import Goals from "./Goals";
import About from "../About/About";
import Head from "./Head";
import Upcoming from "./Upcoming";
function Home() {
  return (
    <div>
      <Head />
      <h1 className="mainpageheadabout">About</h1>
      <About />
      <h1 className="mainpagehead">Goals</h1>
      <Goals />
      <h1 className="mainpagehead" id="event">
        Recent Events
      </h1>
      <Upcoming />
    </div>
  );
}
export default Home;
