import "./Upcoming.css";
import Hovercard from "./assets/Hovercard";


function Upcoming()
{
    return(
        <>
        <div className="upcomingsection" data-aos="fade-up">
        <Hovercard img="./images/insider1.jpeg" content="Episode 1: In this captivating episode of our Insider Series, we delved into the world of the Flipkart GRiD Hackathon with the amazing Ms. Pooja Gera. She shared her remarkable journey and winning strategies to ace hackathons and her experience that led to triumph." name="Insider 1"/>
        <Hovercard img="./images/insider2.jpeg" content="Episode 2: The second episode of the Insider Series was an inspiring session with the talented Ms. Bhawna, one of the MLH Fellowship Top 50 achievers. She shared her exceptional journey and insights, motivating our audience to excel in the dynamic realm of tech." name="Insider 2"/>
        <Hovercard img="./images/insider3.png" content="Episode 3: In our illuminating session, we delved into the art of cracking FAANG companies—those tech giants everyone aspires to join. From crafting standout resumes to acing technical interviews, we dissected strategies and shared insider tips to help attendees land coveted positions at FAANG." name="Insider 3"/>
        </div>
        </>
    )
}
export default Upcoming;