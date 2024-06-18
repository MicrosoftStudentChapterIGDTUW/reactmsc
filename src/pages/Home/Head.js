import "../styles/Head.css";

function Head() {
  return (
    <div className="headsection">
      <div className="imagehead">
        <img
          src="/public/images/images.png"
          className="imageheadsection"
          data-aos="fade-right"
          data-aos-duration="500"
        ></img>
      </div>

      <div className="headcontent" data-aos="fade-left" data-aos-duration="500">
        <h1 className="heading">Microsoft Student Chapter IGDTUW</h1>
        <p className="headp">
          We aim to equip the students with the tools that enable them to
          perform the best in the corporate environment right from their
          starting of programming to interviews to the internship and project
          presentation not only as an engineer but in a lot of other domains
          that remain largely unexplored.
        </p>
      </div>
    </div>
  );
}
export default Head;
