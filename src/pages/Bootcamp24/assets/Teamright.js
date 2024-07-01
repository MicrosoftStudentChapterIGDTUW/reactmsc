import "./Teamright.css";
function Teamright(props) {
  return (
    <>
      <div className="teamsright" data-aos="flip-up" data-aos-duration="1000">
        <div className="achievementright">
        <div className="front-card">
            <span>
              {props.name}
              <br />
            </span>
        </div>
        <div className="back-card">
          <span>
              {props.details}
              <br />
            </span>
        </div>
      </div>
      </div>
    </>
  );
}
export default Teamright;
