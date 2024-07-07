import "./Bootintro.css";
import banner from "../details/mentors/banner.jpg";
function Bootintro()
{
    return(
        <div className="bootintro" data-aos="fade-up">
            <img src={banner}/>
            <div className="bootabout" >
            <div className="intro-text">
                Following the success of summer bootcamp of 2023,
                MSC IGDTUW plans to conduct a revamped edition of
                this event. The Summer Bootcamp aimed to empower
                participants with hands-on learning experiences in
                diverse domains, fostering skills in Web Development,
                App Development, AR/VR, AI/ML, Cybersecurity, Web3, Data Analytics
                and Product Management.
            </div>
            <h2>Outline</h2>
                <ol>
                    <li>Registration period for mentors</li>
                    <li>Finalisation of mentors</li>
                    <li>Registration period for mentess</li>
                    <li>Online Assessment</li>
                    <li>Announcement of mentors</li>
                    <li>Announcement of shortlisted mentees</li>
                    <li>Bootcamp begins</li>
                    <li>Minor Project</li>
                    <li>Major Project</li>
                    <li>Bootcamp concludes</li>
                    <li>Prize and honour roll</li>
                </ol>
            </div>
        </div>
    )
}
export default Bootintro;