import { useNavigate } from "react-router-dom";
import Timeline from "./timeline/Timeline";
import Judges from "./Judges/Judges";

function HackItUp() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const buttonStyle = {
    width: isMobile ? '80vw' : '30vw',
    fontSize: isMobile ? '1.2rem' : '1.5rem',
    padding: isMobile ? '3% 6%' : '1% 2%',
    fontWeight: '600',
    letterSpacing: '0.5px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    border: '2px solid transparent'
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full relative">
        <img
          src="./images/HACK_IT_UP.jpg"
          alt="Hack It Up"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Register Button */}
      <div
        onClick={() => navigate("/hackitup/registration")}
        className="cursor-pointer bg-blue-600 hover:bg-blue-900 rounded-xl
          text-white transition duration-300 ease-in-out text-center
          transform hover:scale-105 my-8 md:my-10"
        style={buttonStyle}
        data-aos="fade-up"
        data-aos-duration="200"
      >
        Register Now!
      </div>

      {/* Timeline Section */}
      <section className="w-full px-4 md:px-8 my-8">
        <Timeline />
      </section>

      {/* Judges Section */}
      <section className="w-full px-4 md:px-8 my-8">
        <Judges />
      </section>
    </div>
  );
}

export default HackItUp;