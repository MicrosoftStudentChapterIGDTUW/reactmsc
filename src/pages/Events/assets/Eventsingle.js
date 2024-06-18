import "./Eventsingle.css";
import insider1 from "../../images/insider1.jpeg";
function Eventsingle(props)
{
    function openevent()
    {console.log(props.url);
        window.location.href=`/${props.url}`
    }
    if(props.actualId===props.highlightid)
    {

        return(
            <div className="eventsingle eventglow" onClick={openevent}>
            <img src={props.image}/>
            <div className="eventsingledesc">
            <h3>{props.name}</h3>
            <h4>Date: {props.date} Venue: {props.venue} </h4>
    
            </div>
        </div>
            )
    }
    else{

        return(
        <div className="eventsingle" onClick={openevent}>
        <img src={props.image}/>
        <div className="eventsingledesc">
        <h3>{props.name}</h3>
        <h4>Date: {props.date} Venue: {props.venue} </h4>

        </div>
    </div>
        )
        }
 

}
export default Eventsingle;