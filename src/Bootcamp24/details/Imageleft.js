import "./Imageleft.css";
function Teamleft(props){
    return(
        <>
        <div className="teamleft" data-aos="flip-up" data-aos-duration="1000">
        <img src={props.image}/>
            <div className="teamachievementleft">
                <span>{props.name}<br/></span>
                {props.content}
            </div>
            
        </div>
        </>
    )
}
export default Teamleft;