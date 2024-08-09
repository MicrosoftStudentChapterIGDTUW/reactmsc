import "./Hovercard.css"
function Hovercard(props)
{
    return(
        <a href={props.href}>
        <div className="galleryhover" >
          <div className="cardhover" >
          <img className="imghover" src={props.img} alt=""/>
          <div className="descriptionhover">
            <h1>{props.name}</h1>
            <p> {props.content} </p>
          </div>
          </div>  
          
        </div>
        </a>
    )
}
export default Hovercard;