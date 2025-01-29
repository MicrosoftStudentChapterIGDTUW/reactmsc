import React from 'react';
import Goals from "./Goals";
import About from "./About/About";
import Head from "./Head";
import Upcoming from "./Upcoming";


function Home() {
  return (
    <div>
      <Head />
      <h1 className="text-center text-blue1-4xl mt-20 sm:mt-12">About</h1>
      <About />
      <h1 className="text-center text-blue1-4xl mt-20 sm:mt-12">Goals</h1>
      <Goals />
      <h1 className="text-center text-blue1-4xl mt-20 sm:mt-12" id="event">
        Recent Events
      </h1>
      <Upcoming />
    </div>
  );
}

export default Home;
