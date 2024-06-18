import "./Bootcamp.css";
import Teamleft from "./assets/Teamleft";
import Teamright from "./assets/Teamright";
import kartik from "../images/kartik.jpg";
import rajat from "../images/rajat.jpeg";
import arushi from "../images/aarushi.jpeg";
import deepakshi from "../images/deepakshi.jpg";
import himanshu from "../images/himanshu.jpeg";
import saumya from "../images/saumya.jpg";
import sidharth from "../images/siddhartha.jpg";
import abhishek from "../images/abhishek.jpg";
import manan from "../images/manan.jpeg";
import Bootintro from "./assets/Bootintro";
import WebD from "./details/webd";
function Bootcamp24(){
    return(
        <>
        <div className="boot">
            <Bootintro/>
        </div>
        <WebD/>
        <div className="mentorsection">
            <div className="circlementor">
                <h3>Web Development Mentors</h3>
                <Teamleft image={kartik} name="Kartik Ohri" content=" is a final year Computer Science student at the Jawaharlal Nehru University
                                                    GSoC Contributor
                                                    Current GSoC Mentor and forever Open source geek"/>
                <Teamright image={rajat} name="Rajat Aggarwal" content=" is a software Engineer at Airtel Digital
                                                    Full Stack Developer
                                                    Open Source Contributor
                                                    Runner up @KWOC'19
                                                    Published 2 IEEE papers on a new algorithm
                                                    MNITJ'22 passout"/>
            </div>
            <div className="circlementor">
                <h3>AI/ML Mentors</h3>
                <Teamleft image={arushi} name="Aarushi Garg" content=" is a product intern at Adobe. She is also an AI/ML mentor at GDSC and Lean In. She has guided more than 100 students to start their journey in ML/AI. She is also a research intern at IGDTUW and have published four research papers in esteemed conferences. She is also a Management Head at TNP."/>
                <Teamright image={deepakshi} name="Deepakshi Mahajan" content=" is an ML Engineer at GFG with a passion for empowering others through AI/ML mentoring. With notable achievements such as being the GDSC ML Lead at the ADGITM chapter, she has served as an AI/ML mentor in programs organized by Intel and the Government of India. She emerged as a winner at Appicorn'22 held in Bangalore, as she continues to make a significant impact."/>
                <Teamleft image={himanshu} name="Himanshu Maurya" content=" is a final year undergrad at NITRR pursuing B.tech in CSE.
                                                    Interned at IITD, IISc, Nference, KIT, Maddox AI and developed various products/ services using deep learning"/>
            </div>
            <div className="circlementor">
                <h3>AR/VR Mentors</h3>
                <Teamleft image={saumya} name="Saumya Sinha" content=" is a CSE Sophomore interested in exploring emerging technologies like AR/VR, won more than 5 hackathons using this tech stack and was nominated as a global nominee in NASA Space App challenge 2022 and keeps learning something new everyday!"/>
                <Teamright image={sidharth} name="Siddhartha Satyarathi" content=" has been working in the field of AR, VR and XR along with Metaverse and Game Development from past 3 years."/>
            </div>
            <div className="circlementor">
                <h3>App Development Mentors</h3>
                <Teamleft image={abhishek} name="Abhishek Bhatt" content=" is a third-year undergrad at MAIT. AWS Cloud Club Captain and a finalist in the SIH (Smart India hackathon). He has also served as a project administrator for open-source initiatives like GsSOC (GirlScript Summer of Code) and SWOC (Script Winter of Code) as well as a mentor at hackathons."/>

            </div>
            <div className="circlementor">
                <h3>Cyber Security Mentors</h3>
                <Teamleft image={manan} name="Manan Jain" content=" is a red teamer/ security consultant having 6 years of experience in freelancing and 1 year experience in industry. He is OSCP, ECPTXv2, ECPPTv2, CRTO, EJPTv2 certified. He currently holds top 5 position on hackthebox in indian region. He has reported bugs to yahoo, dell, ibm, hp and many more companies."/>

            </div>
            
        </div>
        
        </>
    )
}
export default Bootcamp24;