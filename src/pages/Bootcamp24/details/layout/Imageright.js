import "./Imageright.css";

function Teamright(props){
    return(
        <>
        <div className="teamright" data-aos="flip-up" data-aos-duration="1000">
            
            <div className="teamachievement">
            <span>{props.name}<br/></span>
                {props.content}
            </div>
            <img src={props.image}/>
        </div>
        </>
    )
}
export default Teamright;