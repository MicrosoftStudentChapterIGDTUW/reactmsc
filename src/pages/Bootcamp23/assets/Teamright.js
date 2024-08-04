import "./Teamright.css";

function Teamright(props){
    return(
        <>
        <div className="teamright" data-aos="flip-up" data-aos-duration="1000">
            
            <div className="teamachievement">
            <span>{props.name}</span>
                {props.content}
            </div>
            <img src={props.image} alt="Mentor"/>
        </div>
        </>
    )
}
export default Teamright;
