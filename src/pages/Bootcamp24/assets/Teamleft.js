import "./Teamleft.css";
// import nandini from "../../images/Kirti_Aggarwal.jpeg";
function Teamleft(props) {
  return (
    <>
      <div className="teamsleft" data-aos="flip-up" data-aos-duration="1000">
        <div className="achievementleft">
          <span>
            {props.name}
            <br />
          </span>
        </div>
      </div>
    </>
  );
}
export default Teamleft;
