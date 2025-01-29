import React from 'react';
import Goals from "./Goals";
import About from "./About/About";
import Head from "./Head";
import Upcoming from "./Upcoming";

function Home() {
  // Reusable heading component with direct hex code
  const SectionHeading = ({ text, color = "#1B2F4F", id }) => (
    <h1 
      id={id}
      className="text-center font-bold transition-all duration-300 ease-in-out"
      style={{
        color: color,
        fontSize: 'clamp(2rem, 5vw, 3rem)', // responsive font size
        margin: 'clamp(2rem, 5vh, 5rem) 0' // responsive margin
      }}
    >
      {text}
    </h1>
  );

  return (
    <div className="w-full overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="w-full">
        <Head />
      </section>

      {/* About Section */}
      <section style={{ padding: '0 rem' }}>
        <SectionHeading 
          text="About" 
          color="#1B2F4F"
        />
        <About />
      </section>

      {/* Goals Section */}
      <section style={{ padding: '0 1rem' }}>
        <SectionHeading 
          text="Goals" 
          color="#1B2F4F"
        />
        <Goals />
      </section>

      {/* Events Section */}
      <section style={{ padding: '0 1rem' }}>
        <SectionHeading 
          text="Recent Events" 
          color="#1B2F4F"
          id="event"
        />
        <Upcoming />
      </section>
    </div>
  );
}

export default Home;