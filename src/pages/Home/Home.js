import "./Home.css";
import Goals from "./Goals";
import About from "./About";
import Head from "./Head";
import Upcoming from "./Upcoming";
function Home()
{
    return(
        <>
        <Head/>
        <h1 className="mainpageheadabout" >About</h1>
        <About/>
        <h1 className="mainpagehead" >Goals</h1>
        <Goals/>
        <h1 className="mainpagehead" id="event">Recent Events</h1>
        <Upcoming/>

        </>
    )
}
export default Home;