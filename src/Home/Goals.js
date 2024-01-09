import "./Goals.css";
import Circlepointer from "./assets/Circlepointer";
function Goals()
{
    return(
        <>
        <div className="goals_container">
            <Circlepointer head="DECIDE" img="https://img.freepik.com/free-vector/toggle-concept-illustration_114360-8900.jpg?w=2000" content="We will help you decide the best way ahead by providing you the right information."/>
            <Circlepointer head="LEARN"img="https://stories.freepiklabs.com/api/vectors/online-learning/rafiki/render?color=7BBEF4FF&background=complete&hide=" content="We will help you learn what you need to by exclusive events, sessions and webinars."/>
            <Circlepointer head="APPLY"img="https://img.freepik.com/free-vector/forms-concept-illustration_114360-4957.jpg?w=740&t=st=1672240782~exp=1672241382~hmac=18c1cfdd71a792d5457abfd2abc53ec6ecc7b8e5bb61fa8645eef8a7a94f7f37" content="Having skills is one thing and applying that at right place is another. We will bridge the gap."/>
        </div>
        </>
    )
}
export default Goals;