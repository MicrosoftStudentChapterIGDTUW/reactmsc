import "./Teamright.css";
import nandini from "../../images/Kirti_Aggarwal.jpeg";
function Teamright(props) {
  return (
    <>
      <div className="teamright" data-aos="flip-up" data-aos-duration="1000">
        <div className="teamachievement">
          <span>{props.name}<br/></span>
        </div>
      </div>
    </>
  );
}
export default Teamright;