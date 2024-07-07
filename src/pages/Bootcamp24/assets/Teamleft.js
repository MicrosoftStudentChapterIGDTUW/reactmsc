import "./Teamleft.css";
function Teamleft(props) {
  return (
    <> 
      <div className="teamsleft" data-aos="flip-up" data-aos-duration="1000">
        <div className="achievementleft">
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
export default Teamleft;
