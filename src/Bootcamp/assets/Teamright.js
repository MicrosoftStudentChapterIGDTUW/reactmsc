import "./Teamright.css";
import nandini from "../../images/Kirti_Aggarwal.jpeg";
function Teamright(props){
    return(
        <>
        <div className="teamright" data-aos="flip-up" data-aos-duration="1000">
            
            <div className="teamachievement">
            <span>{props.name}</span>
                {props.content}
            </div>
            <img src={props.image}/>
        </div>
        </>
    )
}
export default Teamright;