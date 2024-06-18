import "./About.css";

function About() {
  return (
    <div className="aboutsection">
      <div
        className="aboutcontent"
        data-aos="fade-left"
        data-aos-duration="500"
      >
        <h4>
          We are here, to be the perfect guidance you need to ace the
          engineering journey you are on!
        </h4>
        We are the MICROSOFT LEARN STUDENT AMBASSADOR STUDENT CHAPTER, your one
        stop spot for all the amazing sessions and events. This is where you can
        grow by learning from the mistakes, experiences, success and failure of
        the experts, your seniors, and peers. We will guide and make you ready
        for whatever comes along. Get ready for all the exciting and amazing
        stuff we have in store for you all!
      </div>
      <img
        src="/public/images/home_background.jpg"
        className="imagesection"
        data-aos="fade-right"
        data-aos-duration="500"
      ></img>
    </div>
  );
}
export default About;
